import { FamilyActionType, FamilyActionsEnum, GetFamilyStudentsActionType, StudentActionsEnum, ShowModelActionType, ShowModalActionsEnum } from '../actions/actions';
import { IRegStoreState, IFamily, IStudent, IShowModal } from '../store/RegStoreState';

const defaultState: IFamily = {
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

const defaultStudentState: IStudent = {
  id: 0,
  familyId: 0,
  firstName: "",
  lastName: "",
  chineseName: "",
  gender: "",
  birthday: new Date("2010-01-01"),
  grade: ""
}

const defaultShowModalState: IShowModal = {
  showCreateStudentModal: false
}

export function FamilyReducer(state: IFamily = defaultState, action: FamilyActionType): IFamily {
  switch (action.type) {
    case FamilyActionsEnum.AddFamily:
      return state;
    case FamilyActionsEnum.GetFamily:
      return action.payload;
    case FamilyActionsEnum.UpdateFamily:
      return action.payload;
    default:
      return state;
  }
}

export function StudentReducer(state: IStudent[] = [defaultStudentState], action: GetFamilyStudentsActionType): IStudent[] {
  switch (action.type) {
    case StudentActionsEnum.GetFamilyStudents:
      return action.payload;
    case StudentActionsEnum.UpdateStudents:
      return action.payload;
    default:
      return state;
  }
}

export function ModalReducer(state: IShowModal = defaultShowModalState, action: ShowModelActionType): IShowModal {
  switch (action.type) {
    case ShowModalActionsEnum.ShowCreateStudentModal:
      return action.payload;
    case ShowModalActionsEnum.HideCreateStudentModal:
      return action.payload;
    default:
      return state;
  }
}
