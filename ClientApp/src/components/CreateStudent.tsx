import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { IStudent } from '../store/RegStoreState';
import { Formik, Field } from 'formik';


export class CreateStudent extends Component<{ student: IStudent, showModal: boolean, closeModalHandler: () => void, createStudentHandler: (Student: IStudent) => Promise<void> }, {}> {

  public async componentDidMount() {
  }

  public render() {

    return (
      <Modal isOpen={this.props.showModal}>
        <ModalHeader>Add New Student</ModalHeader>
        <ModalBody>
        <Formik
          enableReinitialize={true}
          initialValues={this.props.student}
          onSubmit={async (values, actions) => {
            await this.props.createStudentHandler(values);
            this.props.closeModalHandler();
          }}
        >
          {props =>
            <div>
              <Form onSubmit={props.handleSubmit}>
                <FormGroup row>
                  <Col md={4}><Label for="firstName">First Name</Label></Col>
                  <Col md={8}><Input tag={Field} name="firstName" type="text" /></Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}><Label for="lastName">Last Name</Label></Col>
                  <Col md={8}><Input tag={Field} name="lastName" type="text" /></Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}><Label for="chineseName">Chinese Name</Label></Col>
                  <Col md={8}><Input tag={Field} name="chineseName" type="text" /></Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}><Label for="birthday">Birthday</Label></Col>
                  <Col md={8}><Input tag={Field} name="birthday" type="text" /></Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}><Label for="gender">Gender</Label></Col>
                  <Col md={8}><Input tag={Field} name="gender" type="text" /></Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}><Label for="grade">Grade</Label></Col>
                  <Col md={8}><Input tag={Field} name="grade" type="text" /></Col>
                </FormGroup>
                <Button disabled={props.isSubmitting}>Submit</Button>&nbsp;
                <Button type="button" onClick={this.props.closeModalHandler}>Cancel</Button>
              </Form>
            </div>
          }
          </Formik>
        </ModalBody>
      </Modal>);
  }
}
