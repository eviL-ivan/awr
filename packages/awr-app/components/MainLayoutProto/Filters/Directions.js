import React, { Component } from "react";
import styled from "styled-components";

import Button from "material-ui/Button";

import { directionsConfig } from "components/Layout/ConstantsTemp";
import { Flex, Margin } from "components/Common/positional";

class Directions extends Component {
  render() {
    return (
      <div>
        <Margin right="20">
          <Flex>
            <span>Направления :</span>
          </Flex>
        </Margin>
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
