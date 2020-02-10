import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Label, Input, Button, Container, Row, Col } from 'reactstrap';

interface IHomePageState {
  fid: string;
}

export class Home extends Component<RouteComponentProps, IHomePageState> {
  static displayName: string = Home.name;

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ fid: e.target.value });
  }

  keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && this.isValidId(this.state.fid)) {
      this.props.history.push(`/family/${this.state.fid}`);
    }
  }

  isValidId = (str: string) => {
    if (!this.state.fid || this.state.fid.length === 0)
      return false;

    return /^\d+$/.test(str);
  }

  constructor(props: any) {
    super(props);
    this.state = {
      fid: ""
    };
  }

  public render () {
    return (
      <div>
        <Container>
          <h4>North Peninsula Mandarin School Registration System</h4>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col><Label>Enter Family Id</Label></Col>
            <Col><Input name="fid" value={this.state.fid} type="text" onChange={this.changeHandler} onKeyPress={this.keyPressHandler} /></Col>
            <Col><Button tag={Link} color="primary" to={`/family/${this.state.fid}`} disabled={!this.isValidId(this.state.fid)}>Go</Button></Col>
          </Row>
          <Row className="mb-3">
            <Col><p className="text-secondary">(Enter 1 and click Go or just Enter to see family page)</p></Col>
          </Row>
          <Row className="mb-3">
            <Col><Link color="primary" to={`/createfamily`} >Add a new Family</Link></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
