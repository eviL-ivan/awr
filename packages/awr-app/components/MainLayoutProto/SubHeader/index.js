import React, { Component } from "react";
import styled from "styled-components";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import FiltersContainer from "./FiltersContainer";
class SubHeader extends Component {
  render() {
    const {
      changeOrganization,
      changeDirection,
      organization,
      directions,
      changeAllDirection
    } = this.props;
    return (
      <Container>
        <SelectContainer
          value={organization}
          onChange={changeOrganization}
          inputProps={{ name: "organization" }}
          native={false}
        >
          <MenuItem value="all">Все организации</MenuItem>
          <MenuItem value="mitek">OOO 'МИТЕК’ </MenuItem>
          <MenuItem value="sup">OOO 'Суповой набор’ </MenuItem>
          <MenuItem value="gold">OOO 'Золотое Дно’</MenuItem>
        </SelectContainer>

        <FiltersContainer
          directions={directions}
          changeDirection={changeDirection}
          changeAllDirection={changeAllDirection}
        />
      </Container>
    );
  }
}

export default SubHeader;

const Container = styled.section`
  height: 60px;
  flex-direction: row;
  padding: 20px 30px;
  background: ${p => p.theme.palette.subMainBlue};
  display: flex;
  //justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled(Select)`
  height: 30px;
  width: 200px;
  color: white !important;
  display: flex;
  font-weight: bold;
  & div:(:first-child) {
    background: ${p => p.theme.palette.subMainBlue} !important;
  }
  &:before,
  &:after {
    background-color: white !important;
  }
  & svg {
    color: white;
  }
`;
