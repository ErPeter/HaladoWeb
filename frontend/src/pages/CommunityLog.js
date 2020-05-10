import { Table } from "react-bootstrap";
import TableElement from "../components/comunityLogs/TableElement";
import { connect } from "react-redux";
import { fetchAllCatches } from "../actions/catchActions";

import React, { Component } from "react";

export class CommunityLog extends Component {
  constructor() {
    super();
    this.state = {
      catches: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllCatches();
  }

  render() {
    return (
      <Table striped bordered hover variant="dark" className="mt-3">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Bait</th>
            <th>Fisshing pole</th>
            <th>Preferred Technique</th>
            <th>Caugth fish</th>
            <th>Lake</th>
          </tr>
        </thead>
        <tbody>
          {this.props.catches.map((actualCatch) => (
            <TableElement
              uid={actualCatch.uid}
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
    );
  }
}

const mapStateToProps = (state) => ({
  catches: state.catches.items,
});

export default connect(mapStateToProps, { fetchAllCatches })(CommunityLog);
