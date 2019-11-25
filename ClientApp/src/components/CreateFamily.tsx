import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Container, Row, Col, Button } from 'reactstrap';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GetFamily, FamilyActionType, GetFamilyData, CreateFamilyData } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { IRegStoreState, IFamily } from '../store/RegStoreState';
import { withFormik, Formik, Field, ErrorMessage, FormikProps } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { FamilySection, IFamilyProps } from './Family';


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

class CreateFamily extends Component<IFamilyProps, {}> {

  public async componentDidMount() {
  }

  public render() {
    return (
      <div>
        <h1>Add New Family</h1>
        <Formik
          enableReinitialize={true}
          initialValues={this.props.family}
          validate={validateEmail}
          onSubmit={(values, actions) => {
            this.props.createFamilyData(values);
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
    initialValues: state.family
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
  return {
    createFamilyData: (family: IFamily) => dispatch(CreateFamilyData(family))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFamily);
