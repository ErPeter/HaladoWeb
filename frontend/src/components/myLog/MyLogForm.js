import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class MyLogForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mt-3">
          <Form.Control type="text" placeholder="Bait" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Fishing pole" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Caught Fish" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Lake" />
        </Form.Group>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Button variant="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default MyLogForm