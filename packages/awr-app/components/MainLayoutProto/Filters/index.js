import React, { Component } from "react";
import styled from "styled-components";

import Period from "./Period";
import Year from "./Year";
import Directions from "./Directions";
import Search from "./Search";

import { Flex, Margin } from "components/Common/positional";

class Filters extends Component {
  render() {
    const { className, activeDirections, changeDirections } = this.props;
    return (
      <div className={className}>
        <Search />
        <Flex grow={0}>
          <Period />
          <MarginContainer right="40">
            <Year />
          </MarginContainer>
          <Directions
            activeDirections={activeDirections}
            changeDirections={changeDirections}
          />
        </Flex>
      </div>
    );
  }
}

export default styled(Filters)`
  position: sticky;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  /*так как блок контент под фильтрами имее scroll то отбиваем этот отступ чуть меньшим width */
  width: 95%;

  /* z-index: 20; */
`;

const MarginContainer = Margin.extend`
  display: flex;
  align-items: center;
`;
