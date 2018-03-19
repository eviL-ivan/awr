import React, { Component } from 'react';
import styled from 'styled-components';

import Button from 'material-ui/Button';

import { directionsConfig } from 'components/Layout/ConstantsTemp';
import { Flex, Margin } from 'components/Common/positional';

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
  margin-right: 10px;
  background: none;
  box-shadow: none;
  margin: 0;
  color: gray;
  min-width: 0;
  &:hover {
    color: black;
    background: lightgray;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  margin-right: 20px;
`;
