import { FamilyActionType, FamilyActionsEnum } from '../actions/actions';
import { RegStoreState } from '../store/RegStoreState';

const defaultState: RegStoreState = {
  family : null
}

export function FamilyReducer(state: RegStoreState = defaultState, action: FamilyActionType): RegStoreState {
  switch (action.type) {
    case FamilyActionsEnum.AddFamily:
      return { ...state };
    case FamilyActionsEnum.GetFamily:
      return { ...state};
    default:
      return state;
  }
}