import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { createCatch } from '../../actions/catchActions';
import {v4 as uuidv4} from 'uuid';

class MyLogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      uid: '101',
      name: 'Matt Smith',
      bait: '',
      fishing_pole: '',
      preferred_technique: '',
      caugthFish: '',
      lake: '',
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newCatch = {
      id: this.state.id,
      uid: this.state.uid,
      name: this.state.name,
      bait: this.state.bait,
      fishing_pole: this.state.fishing_pole,
      preferred_technique: this.state.preferred_technique,
      caugthFish: this.state.caugthFish,
      lake: this.state.lake,
    };
    this.props.createCatch(newCatch);
    this.setState({
      bait: '',
      fishing_pole: '',
      preferred_technique: '',
      caugthFish: '',
      lake: '',
    });
  };

  render() {
    return (
      <Form>
        <Form.Group className='mt-3'>
          <Form.Control
            name='bait'
            value={this.state.bait}
            onChange={(e) => this.change(e)}
            placeholder='Bait'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name='fishing_pole'
            value={this.state.fishing_pole}
            onChange={(e) => this.change(e)}
            placeholder='Fishing pole	'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name='preferred_technique'
            value={this.state.preferred_technique}
            onChange={(e) => this.change(e)}
            placeholder='Technique'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name='caugthFish'
            value={this.state.caugthFish}
            onChange={(e) => this.change(e)}
            placeholder='Caugth fish'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name='lake'
            value={this.state.lake}
            onChange={(e) => this.change(e)}
            placeholder='Lake'
          />
        </Form.Group>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <Button onClick={(e) => this.onSubmit(e)} variant='secondary'>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default connect(null, { createCatch })(MyLogForm);
