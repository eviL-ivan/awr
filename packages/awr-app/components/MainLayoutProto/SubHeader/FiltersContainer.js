import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { FormControlLabel } from "material-ui/Form";
class FiltersContainer extends Component {
  componentDidMount() {
    this.props.changeAllDirection(directionConfig)();
  }

  render() {
    const { directions, changeDirection, changeAllDirection } = this.props;
    return (
      <Container>
        <FormControlLabel
          control={
            <Checkbox
              checked={Object.keys(directions).length == 6}
              onChange={changeAllDirection(directionConfig)}
              value="all"
              classes={{
                checked: "checked",
                default: "checkBox"
              }}
            />
          }
          label={"Все направления"}
        />
        {directionConfig.map(item => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!directions[item.label]}
                  onChange={() => changeDirection(item.label)}
                  value={item.label}
                  classes={{
                    checked: "checked",
                    default: "checkBox"
                  }}
                />
              }
              label={item.name}
            />
          );
        })}
      </Container>
    );
  }
}

export default FiltersContainer;
const checked = {};

const Container = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 50px;
`;

const directionConfig = [
  {
    name: "ФНС",
    label: "fns"
  },
  {
    name: "РПН",
    label: "rnp"
  },
  {
    name: "РАР",
    label: "pap"
  },
  {
    name: "ФСС",
    label: "fss"
  },
  {
    name: "Росстат",
    label: "rosstat"
  },
  {
    name: "ПФР",
    label: "pfr"
  }
];
