import React from "react";
import styled from "styled-components";

import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import DoneIcon from "material-ui-icons/Person";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";

import reports from "./Reports/reportsData";
import ReportsGroupContainer from "./Reports/ReportsGroup/ReportsGroupContainer";
import ReportInformationWindow from "../ReportInformationWindow";
import Filters from "./Filters";
import { directionsConfig } from "components/Layout/ConstantsTemp";

class ReportsDashBoard extends React.Component {
  state = {
    reportInfo: null,
    directions: []
  };
  selectDirection = data => {
    if (data == "all")
      return this.setState({
        directions: directionsConfig
      });
    this.setState({});
  };
  toggleInformationWindow = e => {
    // e.preventDeafault();
    // debugger;
    console.log("e", e.target);

    if (e.target) {
      //e.stopPropagination();
      return this.setState({ reportInfo: null });
    }
    this.setState({ reportInfo: e });
  };

  render() {
    const { className, organization, directions } = this.props;
    return (
      <div className={className}>
        <Filters />
        <Container onClick={this.toggleInformationWindow}>
          <Content>
            {reports.map(({ data, records }, idx) => (
              <ReportsGroupContainer
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
          </Content>
        </Container>
      </div>
    );
  }
}

export default styled(ReportsDashBoard)`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0;
`;

const Container = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  transition: all;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 95%;

  margin-top: 30px;
`;
