import React, { Component } from "react";
import styled from "styled-components";

import Button from "material-ui/Button";

import { directionsConfig } from "components/Layout/ConstantsTemp";
import { Flex, Margin } from "components/Common/positional";

class Directions extends Component {
  render() {
    const { className, changeDirections, activeDirections } = this.props;
    return (
      <div className={className}>
        <TitleContainer>
          <Margin right="20">
            <span>Направления :</span>
          </Margin>
        </TitleContainer>

        {directionsConfig.map((item, idx) => (
          <ButtonContainer
            active={activeDirections.find(
              _item => item.direction == _item.direction
            )}
            direction={item.direction}
            onClick={() => changeDirections(item)}
            variant="raised"
          >
            {item.title}
          </ButtonContainer>
        ))}
      </div>
    );
  }
}

export default styled(Directions)`
  display: flex;
`;

const TitleContainer = Flex.extend`
  align-items: center;
`;

const ButtonContainer = styled(Button)`
  box-shadow: ${p => (p.active ? "1px 3px 5px #686868 " : "none")} !important;
  color: ${p => (p.active ? "white" : "gray")} !important;
  min-width: 0 !important;

  background: ${p =>
    p.active
      ? p.theme.directionColor[p.direction] || "black"
      : "#d3d3d366"} !important;

  margin-right: 10px !important;
  &:hover {
    color: black !important;
    background: lightgray !important;
    /* box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2) !important; */
  }
`;

//background: ${p => p.theme.directionColor[p.direction]};
