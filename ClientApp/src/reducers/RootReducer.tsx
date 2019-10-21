import { combineReducers, Reducer } from "redux";
import { FamilyReducer } from "./FamilyReducer";
import { IRegStoreState } from "../store/RegStoreState";
import { reducer as formReducer } from "redux-form";

export const RootReducer: Reducer<IRegStoreState> = combineReducers<any>({
  family: FamilyReducer,
  form: formReducer
});

