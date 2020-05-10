import { Table } from "react-bootstrap";
import TableElement from "../components/comunityLogs/TableElement";
import axios from "axios";

import React, { Component } from "react";

export class CommunityLog extends Component {
  constructor() {
    super();
    this.state = {
      catches: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/catches").then((res) => {
      console.log(res.data);
      this.setState({ catches: res.data });
    });
  }

  render() {
    return (
      <Table striped bordered hover variant="dark" className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bait</th>
            <th>Fisshing pole</th>
            <th>Preferred Technique</th>
            <th>Caugth fish</th>
            <th>Lake</th>
          </tr>
        </thead>
        <tbody>
          {this.state.catches.map((actualCatch) => (
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
    );
  }
}

export default CommunityLog;
