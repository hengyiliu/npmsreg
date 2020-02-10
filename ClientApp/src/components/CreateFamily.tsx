import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { FamilyActionType, CreateFamilyData } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { IRegStoreState, IFamily, defaultFamilyState } from '../store/RegStoreState';
import { Formik } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { FamilySection } from './Family';


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

interface ICreateFamilyProps extends RouteComponentProps {
  createFamilyData: (family: IFamily) => Promise<number>;
}

class CreateFamily extends Component<ICreateFamilyProps, IFamily> {

  constructor(props: any) {
    super(props);
    this.state = defaultFamilyState;
  }

  public render() {
    let data = this.state;

    return (
      <Formik
        enableReinitialize={true}
        initialValues={data}
        validate={validateEmail}
        onSubmit={async (values, actions) => {
          let newid = await this.props.createFamilyData(values);
          actions.setSubmitting(false);
          this.props.history.push(`/family/${newid}`);
        }}
      >
        {props =>
          <Form onSubmit={props.handleSubmit}>
            <h2>Add New Family</h2>
            <FamilySection family={props.values} />
            <Button disabled={props.isSubmitting}>Submit</Button>
          </Form>
        }

      </Formik>);
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
  return {
    createFamilyData: (family: IFamily) => dispatch(CreateFamilyData(family))
  };
}

export default connect(null, mapDispatchToProps)(CreateFamily);
