export interface IFamily {
  id: number;
  fatherName: string;
  motherName: string;
  fatherChineseName: string;
  motherChineseName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  fatherPhone: string;
  motherPhone: string;
  fatherEmail: string;
  motherEmail: string;
  fatherOccupation: string;
  motherOccupation: string;
  fatherHelpArea: string;
  motherHelpArea: string;
  spokenLanguages: string;
}

export interface IRegStoreState {
  family: IFamily;
}
