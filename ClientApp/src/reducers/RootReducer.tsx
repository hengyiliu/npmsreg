import { combineReducers, Reducer } from "redux";
import { FamilyReducer } from "./FamilyReducer";
import { IRegStoreState } from "../store/RegStoreState";

export const RootReducer: Reducer<IRegStoreState> = combineReducers<IRegStoreState>({
  family: FamilyReducer
});

