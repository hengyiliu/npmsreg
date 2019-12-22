import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Container, Row, Col, Button, FormFeedback } from 'reactstrap';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GetFamily, FamilyActionType, GetFamilyData, UpdateFamilyData } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { IRegStoreState, IFamily, IStudent } from '../store/RegStoreState';
import { withFormik, Formik, Field, ErrorMessage, FormikProps } from 'formik';
import { RouteComponentProps } from 'react-router-dom';


export interface IFamilyProps extends RouteComponentProps<{ id: string }> {
  family: IFamily;
  students: IStudent[];
  getFamilyData: (id: number) => Promise<void>;
  updateFamilyData: (family: IFamily) => Promise<void>;
  createFamilyData: (family: IFamily) => Promise<void>;
}

export const FamilySection = (props: FormikProps<IFamily & { students: IStudent[] }>) => {
  let children = []; // in loop i try created components

  for (var i = 0; i < props.values.students.length; i += 1) {
    let name = "students[" + i + "].firstName";
    children.push(
      <FormGroup row>
        <Col md={2}><Label for="stundetFirstName">Student First Name</Label></Col>
        <Col md={4}><Input tag={Field} name={`students[${i}].firstName`} type="text" /></Col>
      </FormGroup>);
  }

  return (
  <Form onSubmit={props.handleSubmit}>
    <FormGroup row>
      <Col md={2}><Label for="fatherName">Father Name</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherName" type="text" /></Col>
      <Col md={2}><Label for="motherName">Mother Name</Label></Col>
      <Col md={4}><Input tag={Field} name="motherName" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="fatherChineseName">Father Chinese Name</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherChineseName" type="text" /></Col>
      <Col md={2}><Label for="motherChineseName">Mother Chinese Name</Label></Col>
      <Col md={4}><Input tag={Field} name="motherChineseName" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="fatherEmail">Father Email</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherEmail" type="email" /><ErrorMessage name="fatherEmail" /></Col>
      <Col md={2}><Label for="motherEmail">Mother Email</Label></Col>
      <Col md={4}><Input tag={Field} name="motherEmail" type="email" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="fatherPhone">Father Phone</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherPhone" type="text" /></Col>
      <Col md={2}><Label for="motherPhone">Mother Phone</Label></Col>
      <Col md={4}><Input tag={Field} name="motherPhone" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="fatherOccupation">Father Occupation</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherOccupation" type="text" /></Col>
      <Col md={2}><Label for="motherOccupation">Mother Occupation</Label></Col>
      <Col md={4}><Input tag={Field} name="motherOccupation" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="fatherHelpArea">Father Volunteering</Label></Col>
      <Col md={4}><Input tag={Field} name="fatherHelpArea" type="text" /></Col>
      <Col md={2}><Label for="motherHelpArea">Mother Volunteering</Label></Col>
      <Col md={4}><Input tag={Field} name="motherHelpArea" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={2}><Label for="spokenLanguages">Languages at home</Label></Col>
      <Col md={4}><Input tag={Field} name="spokenLanguages" type="text" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col md={1}><Label for="address">Address</Label></Col>
      <Col md={3}><Input tag={Field} name="address" type="text" /></Col>
      <Col md={1}><Label for="city">City</Label></Col>
      <Col md={2}><Input tag={Field} name="city" type="text" /></Col>
      <Col md={1}><Label for="state">State</Label></Col>
      <Col md={1}><Input tag={Field} name="state" type="text" /></Col>
      <Col md={1}><Label for="zipCode">Zip code</Label></Col>
      <Col md={2}><Input tag={Field} name="zipCode" type="text" /></Col>
    </FormGroup>

    <FormGroup row>
      <Col md={2}><Label for="stundetFirstName">Student First Name</Label></Col>
      <Col md={4}><Input tag={Field} name="students[0].firstName" type="text" /></Col>
    </FormGroup>

    {children}

    <Button disabled={props.isSubmitting}>Submit</Button>
  </Form>)
}
;

const validateEmail = (values: IFamily) => {
  let errors: any = {};
  if (!values.fatherEmail) {
    errors.fatherEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.fatherEmail)) {
    errors.fatherEmail = 'Invalid email address';
  }

  //...

  return errors;
};

class Family extends Component<IFamilyProps, {}> {
  static displayName: string = Family.name;

  public async componentDidMount() {
    let idstr = this.props.match.params.id;
    await this.props.getFamilyData(parseInt(idstr));
  }

  public render() {
    let data = { ...this.props.family, students: this.props.students };
    return (
      <div>
        <h1>Family</h1>
        <Formik
          enableReinitialize={true}
          validate={validateEmail}
          initialValues={data}
          onSubmit={(values, actions) => {
            this.props.updateFamilyData(values);
            actions.setSubmitting(false);
          }}
          render={FamilySection}
        >
        </Formik>
      </div>)
  }
}


const mapStateToProps = (state: IRegStoreState) => {
  return {
    family: state.family,
    students: state.students,
    initialValues: state.family
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
  return {
    getFamilyData: (id: number) => dispatch(GetFamilyData(id)),
    updateFamilyData: (family: IFamily) => dispatch(UpdateFamilyData(family))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Family);
