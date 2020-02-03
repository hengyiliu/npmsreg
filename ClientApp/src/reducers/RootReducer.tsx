import { combineReducers, Reducer } from "redux";
import { FamilyReducer, StudentReducer, ModalReducer } from "./FamilyReducer";
import { IRegStoreState } from "../store/RegStoreState";

export const RootReducer: Reducer<IRegStoreState> = combineReducers<any>({
  family: FamilyReducer,
  students: StudentReducer,
  showModal: ModalReducer,
});

