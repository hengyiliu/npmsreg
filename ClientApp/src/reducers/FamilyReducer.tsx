import {
  FamilyActionType,
  FamilyActionsEnum,
  GetFamilyStudentsActionType,
  GetFamilyPaymentsActionType,
  StudentActionsEnum,
  ShowModelActionType,
  ShowModalActionsEnum,
  PaymentActionsEnum,
} from '../actions/actions';
import {
  IFamily,
  IStudent,
  IPayment,
  IShowModal,
  defaultFamilyState,
  defaultStudentState,
  defaultPaymentState,
  defaultShowModalState,
} from '../store/RegStoreState';

export function FamilyReducer(
  state: IFamily = defaultFamilyState,
  action: FamilyActionType,
): IFamily {
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

export function StudentReducer(
  state: IStudent[] = [defaultStudentState],
  action: GetFamilyStudentsActionType,
): IStudent[] {
  switch (action.type) {
    case StudentActionsEnum.GetFamilyStudents:
      return action.payload;
    case StudentActionsEnum.UpdateStudents:
      return action.payload;
    default:
      return state;
  }
}

export function PaymentReducer(
  state: IPayment[] = [defaultPaymentState],
  action: GetFamilyPaymentsActionType,
): IPayment[] {
  switch (action.type) {
    case PaymentActionsEnum.GetFamilyPayments:
      return action.payload;
    case PaymentActionsEnum.UpdatePayments:
      return action.payload;
    default:
      return state;
  }
}

export function ModalReducer(
  state: IShowModal = defaultShowModalState,
  action: ShowModelActionType,
): IShowModal {
  switch (action.type) {
    case ShowModalActionsEnum.ShowCreateStudentModal:
      return {
        ...state,
        showCreateStudentModal: action.payload.showCreateStudentModal,
      };
    case ShowModalActionsEnum.FetchingDataState:
      return { ...state, isFetching: action.payload.isFetching };
    default:
      return state;
  }
}
