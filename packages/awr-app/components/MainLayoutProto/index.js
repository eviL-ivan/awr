import React from "react";
import styled from "styled-components";

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
    if (data === "all")
      return this.setState({
        directions: directionsConfig
      });
    this.setState({});
  };
  toggleInformationWindow = e => {
    // e.preventDeafault();
    // debugger;
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
        <FiltersContainer>
          <Filters />
        </FiltersContainer>
        <Container onClick={this.toggleInformationWindow}>
          <Content>
            {reports.map(({ date, records }, idx) => (
              <ReportsGroupContainer
                key={idx}
                date={date}
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
`;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  width: 100%;
  padding: 20px 0;

  box-shadow: 0 40px 50px #f3f3f2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  padding: 0 70px;
  margin-top: 30px;
`;
