import React, { Component } from "react";
import styled from "styled-components";

import Select from "components/Common/BaseSelect";

class Year extends Component {
  render() {
    return (
      <Select labelTile="Год" handleChange={this.handleChange} values={data} />
    );
  }
}

const data = [
  {
    title: "2018",
    value: 2018
  }
];

export default styled(Year)`
  display: flex;
`;
