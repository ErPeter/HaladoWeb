import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class MyLogForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: "101",
      name: "Matt Smith",
      bait: "",
      fishing_pole: "",
      preferred_technique: "",
      caughtFish: "",
      lake: "",
    };
    this.change = this.change.bind(this);
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        bait: "",
        fishing_pole: "",
        preferred_technique: "",
        caughtFish: "",
        lake: "",
      },
    );
  };

  render() {
    return (
      <Form>
        <Form.Group className="mt-3">
          <Form.Control
            name="bait"
            value={this.state.bait}
            onChange={(e) => this.change(e)}
            placeholder="Bait"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="fishing_pole"
            value={this.state.fishing_pole}
            onChange={(e) => this.change(e)}
            placeholder="Fishing pole	"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="preferred_technique"
            value={this.state.preferred_technique}
            onChange={(e) => this.change(e)}
            placeholder="Technique"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="caugthFish"
            value={this.state.caugthFish}
            onChange={(e) => this.change(e)}
            placeholder="Caught fish"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="lake"
            value={this.state.lake}
            onChange={(e) => this.change(e)}
            placeholder="Lake"
          />
        </Form.Group>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Button onClick={(e) => this.onSubmit(e)} variant="secondary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default MyLogForm;
