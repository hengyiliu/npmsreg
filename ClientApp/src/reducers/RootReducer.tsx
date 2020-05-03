import { combineReducers, Reducer } from "redux";
import { FamilyReducer, StudentReducer, PaymentReducer, ModalReducer } from "./FamilyReducer";
import { IRegStoreState } from "../store/RegStoreState";

export const RootReducer: Reducer<IRegStoreState> = combineReducers<any>({
  family: FamilyReducer,
  students: StudentReducer,
  payments: PaymentReducer,
  showModal: ModalReducer,
});

