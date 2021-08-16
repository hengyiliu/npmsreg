import { useState } from 'react';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Label, Input, Button, Container, Row, Col } from 'reactstrap';

const Home = () => {
  const history = useHistory();
  const [familyId, setFamilyId] = useState<string>('');

  const isValidId = (str: string) => {
    if (!familyId) return false;

    return /^\d+$/.test(str);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFamilyId(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValidId(familyId)) {
      history.push(`/family/${familyId}`);
    }
  };

  return (
    <>
      <Container>
        <h4>North Peninsula Mandarin School Registration System</h4>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <Label>Enter Family Id</Label>
          </Col>
          <Col>
            <Input
              name="fid"
              value={familyId}
              type="text"
              onChange={changeHandler}
              onKeyPress={keyPressHandler}
            />
          </Col>
          <Col>
            <Button
              tag={Link}
              color="primary"
              to={`/family/${familyId}`}
              disabled={!isValidId(familyId)}
            >
              Go
            </Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p className="text-secondary">
              (Enter 1 and click Go or just Enter to see family page)
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Link color="primary" to="/createfamily">
              Add a new Family
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Home };
