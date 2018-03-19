import React, { Component } from "react";
import styled from "styled-components";

import Period from "./Period";
import Year from "./Year";
import Directions from "./Directions";
import Search from "./Search";

import { Flex, Margin } from "components/Common/positional";

class Filters extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Container>
          <Flex>
            <Period />
            <MarginContainer right="20">
              <Year />
            </MarginContainer>
            <Directions />
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

  box-shadow: 0 5px 10px #686868;

  z-index: 20;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

const MarginContainer = Margin.extend`
  display: flex;
  align-items: center;
`;
