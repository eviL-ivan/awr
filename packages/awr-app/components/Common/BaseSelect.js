import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

class BaseSelect extends Component {
  static propTypes = {
    labelTile: PropTypes.string,
    handleChange: PropTypes.func,
    values: PropTypes.array,
    defaultValue: PropTypes.any
  };

  render() {
    const {
      className,
      labelTile,
      handleChange,
      values,
      defaultValue
    } = this.props;

    return (
      <form className={className} autoComplete="off">
        <FormControlContainer>
          {labelTile && (
            <InputLabel htmlFor="age-simple">{labelTile}</InputLabel>
          )}
          <Select
            // displayEmpty
            value={defaultValue || ""}
            onChange={handleChange}
            inputProps={{ name: "age", id: "age-simple" }}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {values.map((item, idx) => (
              <MenuItem key={idx + item.title} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControlContainer>
      </form>
    );
  }
}

export default styled(BaseSelect)`
  display: flex;
  flex-wrap: wrap;

  margin-top: -16px !important;
`;

const FormControlContainer = styled(FormControl)`
  min-width: 120px !important;
`;
