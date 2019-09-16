import { combineReducers, Reducer } from "redux";
import { FamilyReducer } from "./FamilyReducer";
import { RegStoreState } from "../store/RegStoreState";

export const RootReducer: Reducer<RegStoreState> = combineReducers<RegStoreState>({
  family: FamilyReducer
});

