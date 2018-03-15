import React from 'react';
// Компоненты
import DateGroup from "./DateGroup";
// Константы
import { DOCUMENTS } from "./TempConstants";

class Grid extends React.Component {
  render() {
    return (
      <div>
        {
          DOCUMENTS.map((group, index) => (
            <DateGroup
              groupIndex={index}
              date={group.date}
              reports={group.reports}
            />
          ))
        }
      </div>
    );
  }
}

export default Grid;
