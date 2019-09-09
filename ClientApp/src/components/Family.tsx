import React, { Component } from 'react';

export interface IStoreState {
  family: IFamily;
}

export interface IFamily {
  FatherName: string;
}

export class Family extends Component<any, IFamily> {
  static displayName: string = Family.name;

  public constructor(props: any) {
    super(props);
    this.state = {
      FatherName: ""
    };
  }

  public async componentDidMount() {
    var data2 = await fetch('api/SampleData/WeatherForecasts');
    var data = {
      FatherName: "John Smith"
    };
    this.setState(data);
  }

  public render() {
    var data = this.state;
    return (
      <div>
        <h2>FamilyDetail</h2>
        <fieldset >
          <legend>Family</legend>
            <div className="form-group row">
            <label htmlFor="fatherChineseName" className="col-sm-2 col-form-label">Father Chinese Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="fatherChineseName" placeholder="" />
              </div>
            <label htmlFor="motherChineseName" className="col-sm-2 col-form-label">Mother Chinese Name</label>
                <div className="col-sm-4">
              <input type="text" className="form-control" id="motherChineseName" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fatherName" className="col-sm-2 col-form-label">Father English Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="fatherName" placeholder="" />
              </div>
              <label htmlFor="motherName" className="col-sm-2 col-form-label">Mother English Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="motherName" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="address" className="col-sm-1 col-form-label">Address</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="address" placeholder="" />
              </div>
              <label htmlFor="city" className="col-sm-1 col-form-label">City</label>
              <div className="col-sm-2">
                <input type="text" className="form-control" id="city" placeholder="" />
              </div>
              <label htmlFor="state" className="col-sm-1 col-form-label">State</label>
              <div className="col-sm-1">
                <input type="text" className="form-control" id="state" placeholder="" />
              </div>
              <label htmlFor="zipcode" className="col-sm-1 col-form-label">Zipcode</label>
              <div className="col-sm-2">
                <input type="text" className="form-control" id="zipcode" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fatherCell" className="col-sm-2 col-form-label">Father Cell</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="fatherCell" placeholder="" />
              </div>
              <label htmlFor="motherCell" className="col-sm-2 col-form-label">Mother Cell</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="motherCell" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fatherEmail" className="col-sm-2 col-form-label">Father Email</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="fatherEmail" placeholder="" />
              </div>
              <label htmlFor="motherEmail" className="col-sm-2 col-form-label">Mother Email</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="motherEmail" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fatherOccupation" className="col-sm-2 col-form-label">Father Occupation</label>
              <div className="col-sm-4">
              <input type="text" className="form-control" id="fatherOccupation" placeholder="" />
              </div>
              <label htmlFor="motherOccupation" className="col-sm-2 col-form-label">Mother Occupation</label>
              <div className="col-sm-4">
              <input type="text" className="form-control" id="motherOccupation" placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="languageSpoken" className="col-sm-2 col-form-label">Language Spoken at home</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="fatherOccupation" placeholder="" />
              </div>
            </div>

        </fieldset>
      </div>
    );
  }
}
