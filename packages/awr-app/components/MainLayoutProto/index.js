import React from "react";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import DoneIcon from "material-ui-icons/Person";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";
import reports from "./Reports/reportsData";
import ReportItem from "./Reports/ReportItem";

class Documents extends React.Component {
  state = {};

  render() {
    const { className, organization, directions } = this.props;
    return (
      <div className={className}>
        {reports.map(({ data, records }) => (
          <ReportItem
            key={Math.random()}
            data={data}
            records={records}
            organization={organization}
            directions={directions}
          />
        ))}
      </div>
    );
  }
}

export default styled(Documents)`
  display: flex;
  height: 100%;
  width: 95%;
  flex-direction: column;
  transition: all;
`;
