import { IRegStoreState, IFamily, IStudent, IShowModal } from "../store/RegStoreState";
import { ThunkDispatch } from "redux-thunk";

export enum FamilyActionsEnum {
  GetFamily = "GET_FAMILY",
  AddFamily = "ADD_FAMILY",
  UpdateFamily = "UPDATE_FAMILY",
}

export enum StudentActionsEnum {
  GetFamilyStudents = "GET_FAMILY_STUDENTS",
  UpdateStudents = "UPDATE_STUDENTS",
}

export enum ShowModalActionsEnum {
  ShowCreateStudentModal = "SHOW_CREATE_STUDENT_MODAL",
  HideCreateStudentModal = "HIDE_CREATE_STUDENT_MODAL"
}

export interface GetFamilyActionType {
  type: FamilyActionsEnum,
  payload: IFamily
}

export interface AddFamilyActionType {
  type: FamilyActionsEnum,
  payload: IFamily
}

export interface UpdateFamilyActionType {
  type: FamilyActionsEnum,
  payload: IFamily
}

export interface GetFamilyStudentsActionType {
  type: StudentActionsEnum,
  payload: IStudent[]
}

export interface ShowModelActionType {
  type: ShowModalActionsEnum,
  payload: IShowModal
}

export type FamilyActionType = GetFamilyActionType | AddFamilyActionType | UpdateFamilyActionType;
export type AllActionType = GetFamilyActionType | AddFamilyActionType | UpdateFamilyActionType | GetFamilyStudentsActionType | ShowModelActionType;


export function GetFamily(family: IFamily): GetFamilyActionType {
  return {
    type: FamilyActionsEnum.GetFamily,
    payload: family
  };
}

export function AddFamily(family: IFamily): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.AddFamily,
    payload: family
  };
}

export function UpdateFamily(family: IFamily): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.UpdateFamily,
    payload: family
  };
}

export function GetFamilyStudents(students: IStudent[]): GetFamilyStudentsActionType {
  return {
    type: StudentActionsEnum.GetFamilyStudents,
    payload: students
  };
}

export function UpdateStudents(students: IStudent[]): GetFamilyStudentsActionType {
  return {
    type: StudentActionsEnum.UpdateStudents,
    payload: students
  };
}

export function ShowCreateStudentModal(modal: IShowModal): ShowModelActionType {
  return {
    type: ShowModalActionsEnum.ShowCreateStudentModal,
    payload: modal
  }
}

export function GetFamilyData(id: number) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    let resp = await fetch(`/api/families/${id}`);
    let json = await resp.json() as IFamily;
    dispatch(GetFamily(json));

    let studentsResp = await fetch(`/api/families/${id}/students`);
    let studentsJson = await studentsResp.json() as IStudent[];
    dispatch(GetFamilyStudents(studentsJson));
  }
}

export function UpdateFamilyData(family: IFamily) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    console.log(family);
    const resp = await fetch("/api/families/" + family.id , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(family)
    });

    let json = await resp.json() as IFamily;
    dispatch(UpdateFamily(json));

    const stresp = await fetch("/api/students/", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(family.students)
    });

    let stjson = await stresp.json() as IStudent[];
    dispatch(UpdateStudents(stjson));
  }
}

export function CreateFamilyData(family: IFamily) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
    console.log(family);
    const resp = await fetch("/api/families/", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(family)
    });

    let json = await resp.json() as IFamily;
    dispatch(AddFamily(json));
  }
}

export function CreateStudentData(student: IStudent) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, AllActionType>) => {
    console.log(student);
    const resp = await fetch("/api/students/", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    });

    let studentsResp = await fetch(`/api/families/${student.familyId}/students`);
    let studentsJson = await studentsResp.json() as IStudent[];
    dispatch(GetFamilyStudents(studentsJson));
  }
}

//export function ShowCreateStudentModal() {
//  dispatch(ShowModal());
//}
