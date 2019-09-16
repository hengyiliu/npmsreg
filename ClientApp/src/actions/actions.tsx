export enum FamilyActionsEnum {
  GetFamily = "GET_FAMILY",
  AddFamily = "ADD_FAMILY",
}

export interface GetFamilyActionType {
  type: FamilyActionsEnum,
  payload: any
}

export interface AddFamilyActionType {
  type: FamilyActionsEnum,
  payload: any
}

export type FamilyActionType = GetFamilyActionType | AddFamilyActionType;

export function GetFamily(): GetFamilyActionType {
  return {
    type: FamilyActionsEnum.GetFamily,
    payload: null
  };
}

export function AddFamily(): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.AddFamily,
    payload: null
  };
}

