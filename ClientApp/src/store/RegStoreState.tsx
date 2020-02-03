﻿export interface IFamily {
  id: number;
  fatherName: string;
  motherName: string;
  fatherChineseName: string;
  motherChineseName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  fatherPhone: string;
  motherPhone: string;
  fatherEmail: string;
  motherEmail: string;
  fatherOccupation: string;
  motherOccupation: string;
  fatherHelpArea: string;
  motherHelpArea: string;
  spokenLanguages: string;
  students: IStudent[];
}

export interface IStudent {
  id: number;
  familyId: number;
  firstName: string;
  lastName: string;
  chineseName: string;
  gender: string;
  birthday: Date;
  grade: string;
}

export interface IFamilyStudents extends IFamily {
  students: IStudent[];
}

export interface IShowModal {
  showCreateStudentModal?: boolean;
  isFetching?: boolean;
}

export interface IRegStoreState {
  family: IFamily;
  students: IStudent[];
  showModal: IShowModal;
}

export const defaultFamilyState: IFamily = {
  id: 0,
  fatherName: "",
  motherName: "",
  fatherChineseName: "",
  motherChineseName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  fatherEmail: "",
  motherEmail: "",
  fatherPhone: "",
  motherPhone: "",
  fatherOccupation: "",
  motherOccupation: "",
  fatherHelpArea: "",
  motherHelpArea: "",
  spokenLanguages: "",
  students: []
}

export const defaultStudentState: IStudent = {
  id: 0,
  familyId: 0,
  firstName: "",
  lastName: "",
  chineseName: "",
  gender: "",
  birthday: new Date("2010-01-01"),
  grade: ""
}

export const defaultShowModalState: IShowModal = {
  showCreateStudentModal: false,
  isFetching: false
}
