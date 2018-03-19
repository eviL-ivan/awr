import React from "react";
// Компоненты
import DateGroup from "./DateGroup";
import GridToolbar from "./GridToolbar";
// Константы
import { DOCUMENTS, DIRECTIONS } from "./TempConstants";

class Grid extends React.Component {
  state = {
    directions: Object.keys(DIRECTIONS)
  };

  // Выбрать/Снять выделение направления
  toggleDirection = direction => () => {
    this.setState(state => ({
      directions: !state.directions.includes(direction)
        ? [...state.directions, direction]
        : state.directions.filter(item => item !== direction)
    }));
  };

  // Выбрать/Снять выделение всех направлений
  toggleAllDirections = () => {
    this.setState(state => ({
      directions: state.directions.length
        ? state.directions.length < Object.keys(DIRECTIONS).length
          ? Object.keys(DIRECTIONS)
          : []
        : Object.keys(DIRECTIONS)
    }));
  };

  isSelected = direction => this.state.directions.includes(direction);

  render() {
    const { directions } = this.state;

    return [
      <GridToolbar
        directions={directions}
        isSelected={this.isSelected}
        toggleDirection={this.toggleDirection}
        toggleAllDirections={this.toggleAllDirections}
      />,
      [
        DOCUMENTS.map((group, index) => (
          <DateGroup
            groupIndex={index}
            date={group.date}
            reports={group.reports}
          />
        ))
      ]
    ];
  }
}

export default Grid;
