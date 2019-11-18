import { FamilyActionType, FamilyActionsEnum } from '../actions/actions';
import { IRegStoreState, IFamily } from '../store/RegStoreState';

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
  motherHelpArea: ""
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
