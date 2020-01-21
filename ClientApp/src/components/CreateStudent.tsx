import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GetFamily, FamilyActionType, GetFamilyData, CreateFamilyData } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { IRegStoreState, IFamily, IStudent } from '../store/RegStoreState';
import { withFormik, Formik, Field, ErrorMessage, FormikProps } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { FamilySection, IFamilyProps } from './Family';


export class CreateStudent extends Component<{ familyId: number, showModal: boolean, closeModalHandler: () => void }, {}> {

  public async componentDidMount() {
  }

  public render() {

    return (
      <Modal isOpen={this.props.showModal}>
        <Formik
          enableReinitialize={true}
          initialValues={{}}
          onSubmit={(values, actions) => {
            // this.props.createFamilyData(values);
            // actions.setSubmitting(false);
          }}
        >
          {props =>
            <Form onSubmit={props.handleSubmit}>
              <h1>Add New Student</h1>
              FirstName:
              <Button disabled={props.isSubmitting}>Submit</Button>
              <Button type="button" onClick={this.props.closeModalHandler}>Cancel</Button>
            </Form>
          }

        </Formik>
      </Modal>);
  }
}
