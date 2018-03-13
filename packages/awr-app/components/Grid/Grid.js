import React from 'react';
import DateGroup from "./DateGroup";

import { DOCUMENTS } from "./TempConstants";

class Grid extends React.Component {
  render() {
    return (
      <div>
        {
          DOCUMENTS.map(group => (
            <DateGroup
              date={group.date}
              name={group.name}
              reports={group.reports}
            />
          ))
        }
      </div>
    );
  }
}

export default Grid;
