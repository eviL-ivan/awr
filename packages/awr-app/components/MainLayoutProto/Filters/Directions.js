import React, { Component } from "react";
import styled from "styled-components";

import Button from "material-ui/Button";

import { directionsConfig } from "components/Layout/ConstantsTemp";
class Directions extends Component {
  render() {
    return (
      <div>
        <span>Направления :</span>
        <ButtonContainer variant="raised">ВСЕ</ButtonContainer>
        {directionsConfig.map((item, idx) => (
          <ButtonContainer variant="raised">{item.title}</ButtonContainer>
        ))}
      </div>
    );
  }
}

export default Directions;

const ButtonContainer = styled(Button)`
  margin-right: 10px !important;
  background: none !important;
  box-shadow: none !important;
  margin: 0 !important;
  color: gray !important;
  min-width: 0 !important;
  &:hover {
    color: black !important;
    background: lightgray !important;
  }
`;
