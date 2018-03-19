import React, { Component } from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
import TextField from "material-ui/TextField";
import Search from "material-ui-icons/Search";
import Button from "material-ui/Button";
=======
import TextField from 'material-ui/TextField';
import Search from 'material-ui-icons/Search';
>>>>>>> 8d8ffdde0a7fd9e2bab923e1fa63292b916860e6

class SearchBlock extends Component {
  state = {
    focus: false
  };
  render() {
    return (
      <div>
        <SearchIconContainer variant="fab" aria-label="add">
          <SearchIcon />
        </SearchIconContainer>
        <SearchInput
          onClick={this.setFocus}
          onBlur={this.disableFocus}
          active={this.state.focus}
          placeholder="Поиск..."
          id="bootstrap-input"
          InputLabelProps={{ shrink: true }}
        />
      </div>
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

const SearchIconContainer = styled(Button)`
  width: 45px !important;
  height: 45px !important;

  opacity: 0.9;
  box-shadow: none;

  background: white !important;

  :hover {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
`;

const SearchIcon = styled(Search)`
<<<<<<< HEAD
  height: 100% !important;

  color: ${p => p.theme.palette.mainColor};
`;
/* width: ${p => (p.active ? "250px" : "200px")} !important; */
const SearchInput = styled(TextField)`
  width: 250px !important;
=======
  position: absolute;
  left: 10px;

  height: 100%;

  color: ${p => p.theme.palette.mainColor};
`;

const SearchInput = styled.input`
  width: ${p => (p.active ? '250px' : '200px')};

  transition: all 0.3s;

  padding: 7px 40px 10px;
>>>>>>> 8d8ffdde0a7fd9e2bab923e1fa63292b916860e6

  border-radius: 5px;
  border: 1px solid lightgray;

  input {
    padding-left: 10px !important;
  }
`;
