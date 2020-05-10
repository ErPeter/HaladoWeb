import React from "react";

function TableElement(props) {
  return (
    <tr>
      <td>{props.uid}</td>
      <td>{props.name}</td>
      <td>{props.bait}</td>
      <td>{props.fishing_pole}</td>
      <td>{props.preferred_technique}</td>
      <td>{props.caugthFish}</td>
      <td>{props.lake}</td>
    </tr>
  );
}

export default TableElement;
