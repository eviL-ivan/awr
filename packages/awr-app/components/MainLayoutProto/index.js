import React from "react";
import styled from "styled-components";

import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import DoneIcon from "material-ui-icons/Person";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";

import reports from "./Reports/reportsData";
import ReportsContainer from "./Reports/ReportsContainer";
import ReportInformationWindow from "../ReportInformationWindow";

class Documents extends React.Component {
  state = {
    reportInfo: null
  };

  toggleInformationWindow = e => {
    // e.preventDeafault();
    // debugger;
    console.log("e", e);

    if (e.target) {
      //e.stopPropagination();
      return this.setState({ reportInfo: null });
    }
    this.setState({ reportInfo: e });
  };

  render() {
    const { className, organization, directions } = this.props;
    return (
      <div className={className} onClick={this.toggleInformationWindow}>
        {reports.map(({ data, records }, idx) => (
          <ReportsContainer
            key={idx}
            data={data}
            records={records}
            organization={organization}
            directions={directions}
            toggleInformationWindow={this.toggleInformationWindow}
          />
        ))}
        <ReportInformationWindow
          data={this.state.reportInfo}
          toggleInformationWindow={this.toggleInformationWindow}
        />
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
