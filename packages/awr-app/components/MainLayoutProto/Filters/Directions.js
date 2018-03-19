import React, { Component } from "react";
import styled from "styled-components";

import Button from "material-ui/Button";

import { directionsConfig } from "components/Layout/ConstantsTemp";
import { Flex, Margin } from "components/Common/positional";

class Directions extends Component {
  render() {
    const { activeDirections, changeDirections } = this.props;
    console.log("activeDirections", activeDirections);

    return (
      <Container>
        <TitleContainer>
          <span>Направления :</span>
        </TitleContainer>
        {directionsConfig.map((item, idx) => (
          <ButtonContainer
            active={activeDirections.find(
              _item => item.direction === _item.direction
            )}
            direction={item.direction}
            onClick={() => changeDirections(item)}
            variant="raised"
          >
            {item.title}
          </ButtonContainer>
        ))}
      </Container>
    );
  }
}

export default Directions;

const Container = Flex.extend`
  align-items: center;
`;

const ButtonContainer = styled(Button)`
  height: auto;
  min-width: 0 !important;

  padding: 10px;
  margin-right: 10px !important;

  color: ${p => (p.active ? "white" : "gray")} !important;
  background: ${p =>
    p.active
      ? p.theme.directionColor[p.direction] || "black"
      : "#d3d3d366"} !important;

  box-shadow: ${p => (p.active ? "1px 3px 5px #686868 " : "none")} !important;

  &:hover {
    color: black !important;
    background: lightgray !important;
    /* box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2) !important; */
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  margin-right: 20px;
`;
