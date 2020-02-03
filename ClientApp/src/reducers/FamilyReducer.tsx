import { FamilyActionType, FamilyActionsEnum, GetFamilyStudentsActionType, StudentActionsEnum, ShowModelActionType, ShowModalActionsEnum } from '../actions/actions';
import { IFamily, IStudent, IShowModal, defaultFamilyState, defaultStudentState, defaultShowModalState } from '../store/RegStoreState';


export function FamilyReducer(state: IFamily = defaultFamilyState, action: FamilyActionType): IFamily {
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
      return {...state, showCreateStudentModal: action.payload.showCreateStudentModal }
    case ShowModalActionsEnum.FetchingDataState:
      return { ...state, isFetching: action.payload.isFetching }
    default:
      return state;
  }
}
