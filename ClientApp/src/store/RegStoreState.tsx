export interface IFamily {
  id: number;
  fatherName: string;
  motherName: string;
  fatherPhone: string;
  motherPhone: string;
  fatherEmail: string;
  motherEmail: string;
}

export interface IRegStoreState {
  family: IFamily;
}
