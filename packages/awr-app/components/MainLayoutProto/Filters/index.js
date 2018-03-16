import React, { Component } from "react";
import styled from "styled-components";

import Period from "./Period";
import Year from "./Year";
import Directions from "./Directions";
import Search from "./Search";

import { Flex, Margin } from "components/Common/positional";

class Filters extends Component {
  render() {
    const { className, changeDirections, activeDirections } = this.props;
    return (
      <div className={className}>
        <Container>
          <Flex>
            <Period />
            <Margin right="20">
              <Year />
            </Margin>
            <Directions
              changeDirections={changeDirections}
              activeDirections={activeDirections}
            />
          </Flex>

          <Search />
        </Container>
      </div>
    );
  }
}

export default styled(Filters)`
  position: sticky;
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 20px 0;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  z-index: 20;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;
