import React from 'react';
import styled from 'styled-components';
import MUIPaper from 'material-ui/Paper';
import MUIButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
// Константы
import { DIRECTIONS } from './TempConstants';
// Иконки
import SelectIcon from 'material-ui-icons/Check';
import SearchIcon from 'material-ui-icons/Search';

const Paper = styled(MUIPaper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 1px 3px #ccc;
`;

const Leftside = styled.div``;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(MUIButton)`
  min-width: inherit;
  background: ${p => p.selected && p.theme.palette.mainColor};
  color: ${p =>
    p.selected
      ? p.theme.palette.lightTextColor
      : p.theme.palette.darkTextColor};
  margin-left: 10px;

  svg {
    width: 20px;
    height: 20px;
    opacity: ${p => (p.selected ? '1' : '0.1')};
  }
`;

class GridToolbar extends React.Component {
  render() {
    const {
      toggleDirection,
      toggleAllDirections,
      isSelected,
      directions
    } = this.props;
    const isSelectedAll = directions.length === Object.keys(DIRECTIONS).length;

    return (
      <Paper>
        <Leftside>
          <FormControl>
            <Input
              placeholder="Поиск"
              id="adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Leftside>
        <RightSide>
          <Typography color="textSecondary">Направления:</Typography>
          <Button
            size="small"
            onClick={toggleAllDirections}
            selected={isSelectedAll}
          >
            <SelectIcon />
            Все направления
          </Button>
          {Object.keys(DIRECTIONS).map(key => (
            <Button
              size="small"
              key={key}
              onClick={toggleDirection(key)}
              selected={isSelected(key)}
            >
              <SelectIcon />
              {DIRECTIONS[key]}
            </Button>
          ))}
        </RightSide>
      </Paper>
    );
  }
}

export default GridToolbar;
