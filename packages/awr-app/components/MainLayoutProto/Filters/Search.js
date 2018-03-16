import React, { Component } from "react";
import styled from "styled-components";

import TextField from "material-ui/TextField";
import Search from "material-ui-icons/Search";

class SearchBlock extends Component {
  state = {
    focus: false
  };
  render() {
    return (
      <Container>
        <SearchIcon />
        <SearchInput
          onClick={this.setFocus}
          onBlur={this.disableFocus}
          active={this.state.focus}
          placeholder="Поиск..."
          label="Bootstrap"
          id="bootstrap-input"
          InputLabelProps={{ shrink: true }}
        />
      </Container>
    );
  }
  setFocus = () => {
    this.setState({ focus: true });
  };
  disableFocus = () => {
    this.setState({ focus: false });
  };
}

export default SearchBlock;

const Container = styled.div`
  position: relative;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 10px;

  height: 100% !important;

  color: ${p => p.theme.palette.mainColor};
`;

const SearchInput = styled.input`
  width: ${p => (p.active ? "250px" : "200px")} !important;

  transition: all 0.3s !important;

  padding: 7px 40px 10px;

  border-radius: 5px;
  border: 1px solid lightgray;
`;
