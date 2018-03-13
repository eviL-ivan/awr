import React from 'react';
import Report from "./Report";
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from "material-ui/List";

class DateGroup extends React.Component {
  render() {
    const { name, date, reports } = this.props;

    return (
      <List
        subheader={<ListSubheader>{date}</ListSubheader>}
      >
        {
          reports.map(report => (
            <Report
              name={report.name}
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