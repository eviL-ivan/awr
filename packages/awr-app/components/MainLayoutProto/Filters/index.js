import React, { Component } from "react";
import styled from "styled-components";

import Period from "./Period";
import Year from "./Year";
import Directions from "./Directions";
import { Flex } from "components/Common/positional";

class Filters extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Container>
          <Flex>
            <Period />
            <Year />
          </Flex>
          <Directions />
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
