import { combineReducers, Reducer } from "redux";
import { FamilyReducer, StudentReducer } from "./FamilyReducer";
import { IRegStoreState } from "../store/RegStoreState";

export const RootReducer: Reducer<IRegStoreState> = combineReducers<any>({
  family: FamilyReducer,
  students: StudentReducer
});

