import React, { Component } from "react";
import styled from "styled-components";

import Button from "material-ui/Button";

import { directionsConfig } from "components/Layout/ConstantsTemp";
import { Flex, Margin } from "components/Common/positional";

class Directions extends Component {
  render() {
    return (
      <Flex>
        <TitleContainer>
          <span>Направления :</span>
        </TitleContainer>
        <ButtonContainer variant="raised">ВСЕ</ButtonContainer>
        {directionsConfig.map((item, idx) => (
          <ButtonContainer variant="raised">{item.title}</ButtonContainer>
        ))}
      </Flex>
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

const TitleContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  margin-right: 20px;
`;
