import { FamilyActionType, FamilyActionsEnum } from '../actions/actions';
import { IRegStoreState } from '../store/RegStoreState';

const defaultState: IRegStoreState = {
  family : null
}

export function FamilyReducer(state: IRegStoreState = defaultState, action: FamilyActionType): IRegStoreState {
  switch (action.type) {
    case FamilyActionsEnum.AddFamily:
      return { ...state };
    case FamilyActionsEnum.GetFamily:
      return action.payload;
    default:
      return state;
  }
}