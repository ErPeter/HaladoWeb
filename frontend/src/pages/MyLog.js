import { Table } from "react-bootstrap";
import TableElement from "../components/comunityLogs/TableElement";
import MyLogForm from "../components/myLog/MyLogForm";
import { connect } from 'react-redux';
import { fetchCatches } from '../actions/catchActions'

import React, { Component } from "react";

export class MyLog extends Component {

  componentDidMount() {
    this.props.fetchCatches();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCatch) {
      this.props.catches.unshift(nextProps.newCatch);
    }
  }

  render() {
    return (
      <div>
        <MyLogForm/>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Bait</th>
              <th>Fisshing pole</th>
              <th>Preferred Technique</th>
              <th>Caugth Fish</th>
              <th>Lake</th>
            </tr>
          </thead>
          <tbody>
            {this.props.catches.map((actualCatch) => (
              <TableElement
                id={actualCatch.id}
                name={actualCatch.name}
                bait={actualCatch.bait}
                fishing_pole={actualCatch.fishing_pole}
                preferred_technique={actualCatch.preferred_technique}
                caugthFish={actualCatch.caugthFish}
                lake={actualCatch.lake}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catches: state.catches.items,
  newCatch: state.catches.item
});

export default connect(mapStateToProps, { fetchCatches })(MyLog);