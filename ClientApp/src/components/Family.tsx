import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Form, FormGroup, Input, Label, Col, Button, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { GetFamilyData, UpdateFamilyData, CreateStudentData, AllActionType, ShowCreateStudentModal } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { IRegStoreState, IFamily, IStudent, IFamilyStudents, IShowModal, IPayment } from '../store/RegStoreState';
import { Formik, Field, ErrorMessage } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { CreateStudent } from './CreateStudent';

export interface IFamilyProps extends RouteComponentProps<{ id: string }> {
  family: IFamily;
  students: IStudent[];
  payments: IPayment[];
  showModal: IShowModal;
  getFamilyData: (id: number) => Promise<void>;
  updateFamilyData: (family: IFamilyStudents) => Promise<void>;
  createStudentHandler: (Student: IStudent) => Promise<void>;
  showCreateStudentModalHandler: () => void;
  closeCreateStudentModalHandler: () => void;
}

const StudentList = (props: { students: IStudent[] }) => {
  let children = []; // in loop i try created components

  for (let i = 0; i < props.students.length; i += 1) {
    let sid = props.students[i].id;
    children.push(
      <tr key={sid}>
        <td>{sid}</td>
        <td><Input tag={Field} name={`students[${i}].firstName`} type="text" /></td>
        <td><Input tag={Field} name={`students[${i}].lastName`} type="text" /></td>
        <td><Input tag={Field} name={`students[${i}].chineseName`} type="text" /></td>
        <td><Input tag={Field} name={`students[${i}].birthday`} type="text" /></td>
        <td><Input tag={Field} name={`students[${i}].gender`} type="text" /></td>
        <td><Input tag={Field} name={`students[${i}].grade`} type="text" /></td>
      </tr>);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Chinese Name</th>
          <th>Birthday</th>
          <th>Gender</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  );
}

const PaymentList = (props: { payments: IPayment[] }) => {
  let children = []; // in loop i try created components

  for (let i = 0; i < props.payments.length; i += 1) {
    let sid = props.payments[i].id;
    children.push(
      <tr key={sid}>
        <td>{sid}</td>
        <td><Input tag={Field} name={`payments[${i}].createdAt`} type="text" /></td>
        <td><Input tag={Field} name={`payments[${i}].amount`} type="number" /></td>
        <td><Input tag={Field} name={`payments[${i}].method`} type="text" /></td>
        <td><Input tag={Field} name={`payments[${i}].transactionRef`} type="text" /></td>
      </tr>);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Method</th>
          <th>Transaction Ref</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  );
}

export const FamilySection = (props: { family: IFamily }) => {
  return (
  <>
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
  </>)
};

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
    let data: IFamilyStudents = { ...this.props.family, students: this.props.students, payments: this.props.payments };
    let newStudent: IStudent = {
      id: 0,
      familyId: this.props.family.id,
      firstName: "",
      lastName: "",
      chineseName: "",
      gender: "",
      birthday: new Date("2010-01-01"),
      grade: ""
    };

    if (this.props.showModal.isFetching) {
      return (
        <div className="text-center">
          <Loader
            type="Oval"
            color="gray"
            height={100}
            width={100}
          />
        </div>);
    }

    return (
      <>
        <Formik
          enableReinitialize={true}
          validate={validateEmail}
          initialValues={data}
          onSubmit={async (values, actions) => {
            await this.props.updateFamilyData(values);
            actions.setSubmitting(false);
          }}
        >
          {props =>
            <Form onSubmit={props.handleSubmit}>
              <h2>Family ID: {props.values.id}</h2>
              <FamilySection family={props.values} />
              <br />
              <h3>Students</h3>
              <StudentList students={props.values.students} />
              <Button onClick={this.props.showCreateStudentModalHandler}>Add Student</Button>
              &nbsp;
              <br />
              <h3>Payments</h3>
              <PaymentList payments={props.values.payments} />
              <br />
              <Button type="submit" disabled={props.isSubmitting}>Save</Button>
            </Form>
          }
        </Formik>
        <CreateStudent student={newStudent} showModal={this.props.showModal.showCreateStudentModal || false}
          closeModalHandler={this.props.closeCreateStudentModalHandler} createStudentHandler={this.props.createStudentHandler} />
      </> );
  }
}


const mapStateToProps = (state: IRegStoreState) => {
  return {
    family: state.family,
    students: state.students,
    payments: state.payments,
    showModal: state.showModal
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
  return {
    getFamilyData: (id: number) => dispatch(GetFamilyData(id)),
    updateFamilyData: (family: IFamilyStudents) => dispatch(UpdateFamilyData(family)),
    createStudentHandler: (student: IStudent) => dispatch(CreateStudentData(student)),
    showCreateStudentModalHandler: () => dispatch(ShowCreateStudentModal(true)),
    closeCreateStudentModalHandler: () => dispatch(ShowCreateStudentModal(false))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Family);
