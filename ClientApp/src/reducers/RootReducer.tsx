import { combineReducers, Reducer } from 'redux';
import { IRegStoreState } from '../store/RegStoreState';
import {
  FamilyReducer,
  StudentReducer,
  PaymentReducer,
  ModalReducer,
} from './FamilyReducer';

export const RootReducer: Reducer<IRegStoreState> = combineReducers<IRegStoreState>({
  family: FamilyReducer,
  students: StudentReducer,
  payments: PaymentReducer,
  showModal: ModalReducer,
});
