import React, { Component } from "react";
import styled from "styled-components";

import Select from "components/Common/BaseSelect";

class Period extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Select
          labelTile="Период"
          handleChange={this.handleChange}
          values={data}
        />
      </div>
    );
  }
}

const data = [
  {
    title: "I квартал",
    value: 1
  },
  {
    title: "II квартал",
    value: 2
  },
  {
    title: "III квартал",
    value: 3
  },
  {
    title: "IV квартал",
    value: 4
  }
];

export default styled(Period)`
  margin-right: 20px;
`;
