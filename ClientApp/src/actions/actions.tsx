import { ThunkDispatch } from 'redux-thunk';
import {
  IRegStoreState,
  IFamily,
  IStudent,
  IPayment,
  IShowModal,
} from '../store/RegStoreState';

const baseUrl = 'https://npmsreg-dev.azurewebsites.net';

export enum FamilyActionsEnum {
  GetFamily = 'GET_FAMILY',
  AddFamily = 'ADD_FAMILY',
  UpdateFamily = 'UPDATE_FAMILY',
}

export enum StudentActionsEnum {
  GetFamilyStudents = 'GET_FAMILY_STUDENTS',
  UpdateStudents = 'UPDATE_STUDENTS',
}

export enum PaymentActionsEnum {
  GetFamilyPayments = 'GET_FAMILY_PAYMENTS',
  UpdatePayments = 'UPDATE_PAYMENTS',
}

export enum ShowModalActionsEnum {
  ShowCreateStudentModal = 'SHOW_CREATE_STUDENT_MODAL',
  FetchingDataState = 'FETCHING_DATA',
}

export interface GetFamilyActionType {
  type: FamilyActionsEnum;
  payload: IFamily;
}

export interface AddFamilyActionType {
  type: FamilyActionsEnum;
  payload: IFamily;
}

export interface UpdateFamilyActionType {
  type: FamilyActionsEnum;
  payload: IFamily;
}

export interface GetFamilyStudentsActionType {
  type: StudentActionsEnum;
  payload: IStudent[];
}

export interface GetFamilyPaymentsActionType {
  type: PaymentActionsEnum;
  payload: IPayment[];
}

export interface ShowModelActionType {
  type: ShowModalActionsEnum;
  payload: IShowModal;
}

export type FamilyActionType =
  | GetFamilyActionType
  | AddFamilyActionType
  | UpdateFamilyActionType;
export type AllActionType =
  | GetFamilyActionType
  | AddFamilyActionType
  | UpdateFamilyActionType
  | GetFamilyStudentsActionType
  | GetFamilyPaymentsActionType
  | ShowModelActionType;

export function GetFamily(family: IFamily): GetFamilyActionType {
  return {
    type: FamilyActionsEnum.GetFamily,
    payload: family,
  };
}

export function AddFamily(family: IFamily): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.AddFamily,
    payload: family,
  };
}

export function UpdateFamily(family: IFamily): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.UpdateFamily,
    payload: family,
  };
}

export function GetFamilyStudents(
  students: IStudent[],
): GetFamilyStudentsActionType {
  return {
    type: StudentActionsEnum.GetFamilyStudents,
    payload: students,
  };
}

export function GetFamilyPayments(
  payments: IPayment[],
): GetFamilyPaymentsActionType {
  return {
    type: PaymentActionsEnum.GetFamilyPayments,
    payload: payments,
  };
}

export function UpdateStudents(
  students: IStudent[],
): GetFamilyStudentsActionType {
  return {
    type: StudentActionsEnum.UpdateStudents,
    payload: students,
  };
}

export function ShowCreateStudentModal(
  showModal: boolean,
): ShowModelActionType {
  return {
    type: ShowModalActionsEnum.ShowCreateStudentModal,
    payload: {
      showCreateStudentModal: showModal,
    },
  };
}

export function FetchingDataState(fetching: boolean): ShowModelActionType {
  return {
    type: ShowModalActionsEnum.FetchingDataState,
    payload: {
      isFetching: fetching,
    },
  };
}

export function GetFamilyData(id: number) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    dispatch(FetchingDataState(true));
    const resp = await fetch(`${baseUrl}/api/families/${id}`);
    const json = (await resp.json()) as IFamily;
    dispatch(GetFamily(json));

    const studentsResp = await fetch(`${baseUrl}/api/families/${id}/students`);
    const studentsJson = (await studentsResp.json()) as IStudent[];
    dispatch(GetFamilyStudents(studentsJson));

    const paymentsResp = await fetch(`${baseUrl}/api/families/${id}/payments`);
    const paymentsJson = (await paymentsResp.json()) as IPayment[];
    dispatch(GetFamilyPayments(paymentsJson));

    dispatch(FetchingDataState(false));
  };
}

export function UpdateFamilyData(family: IFamily) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    console.log(family);
    const resp = await fetch(`${baseUrl}/api/families/${family.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(family),
    });

    const json = (await resp.json()) as IFamily;
    dispatch(UpdateFamily(json));

    const stresp = await fetch('${baseUrl}/api/students/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(family.students),
    });

    const stjson = (await stresp.json()) as IStudent[];
    dispatch(UpdateStudents(stjson));
  };
}

export function CreateFamilyData(family: IFamily) {
  return async (
    dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>,
  ) => {
    console.log(family);
    const resp = await fetch('${baseUrl}/api/families/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(family),
    });

    const json = (await resp.json()) as IFamily;
    dispatch(AddFamily(json));
    return json.id;
  };
}

export function CreateStudentData(student: IStudent) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    console.log(student);
    await fetch('${baseUrl}/api/students/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });

    const studentsResp = await fetch(
      `${baseUrl}/api/families/${student.familyId}/students`,
    );
    const studentsJson = (await studentsResp.json()) as IStudent[];
    dispatch(GetFamilyStudents(studentsJson));
  };
}
