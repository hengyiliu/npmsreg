import { IRegStoreState, IFamily } from "../store/RegStoreState";
import { ThunkDispatch } from "redux-thunk";

export enum FamilyActionsEnum {
  GetFamily = "GET_FAMILY",
  AddFamily = "ADD_FAMILY",
  UpdateFamily = "UPDATE_FAMILY"
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

export type FamilyActionType = GetFamilyActionType | AddFamilyActionType | UpdateFamilyActionType;

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

export function GetFamilyData(id: number) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
    var resp = await fetch(`/api/families/${id}`);

    var json = await resp.json() as IFamily;
    dispatch(GetFamily(json));
  }
}

export function UpdateFamilyData(family: IFamily) {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
    console.log(family);
/*
    const resp = await fetch("/api/families", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(family)
    });

    var json = await resp.json() as IFamily;
    dispatch(UpdateFamily(json));
*/
    dispatch(UpdateFamily(family));
  }
}
