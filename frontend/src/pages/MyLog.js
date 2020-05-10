import { Table } from "react-bootstrap";
import TableElement from "../components/comunityLogs/TableElement";
import MyLogForm from "../components/myLog/MyLogForm";
import axios from "axios";

import React, { Component } from "react";

export class MyLog extends Component {
  constructor() {
    super();
    this.state = {
      catches: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/catches?id=101").then((res) => {
      console.log(res.data);
      this.setState({ catches: res.data });
    });
  }

  render() {
    return (
      <div>
        <MyLogForm
          onSubmit={(submission) => {
            this.setState({
              catches: [...this.state.catches, submission],
            });
          }}
        />
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Bait</th>
              <th>Fisshing pole</th>
              <th>Preferred Technique</th>
              <th>Caught fish</th>
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
      </div>
    );
  }
}

export default MyLog;
