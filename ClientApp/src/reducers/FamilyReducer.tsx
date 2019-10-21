import { FamilyActionType, FamilyActionsEnum } from '../actions/actions';
import { IRegStoreState, IFamily } from '../store/RegStoreState';

const defaultState: IFamily = {
  fatherName: "f",
  motherName: "",
  fatherEmail: "",
  motherEmail: "",
  fatherPhone: "",
  motherPhone: ""
}

export function FamilyReducer(state: IFamily = defaultState, action: FamilyActionType): IFamily {
  debugger;
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