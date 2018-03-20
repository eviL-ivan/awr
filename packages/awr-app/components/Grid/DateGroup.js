import React from "react";
import Report from "./Report";
import List, { ListSubheader } from "material-ui/List";

class DateGroup extends React.Component {
  render() {
    const { date, reports, groupIndex } = this.props;

    return (
      <List subheader={<ListSubheader>{date}</ListSubheader>}>
        {
          reports.map((report, index) => (
            <Report
              key={report.name}
              name={report.name}
              groupIndex={groupIndex}
              index={index}
              documents={report.organizations}
              description={report.description}
              direction={report.direction}
            />
          ))
        }
      </List>
    );
  }
}

export default DateGroup;
