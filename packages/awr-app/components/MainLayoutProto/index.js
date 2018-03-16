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
import Filters from "./Filters";
import { directionsConfig } from "components/Layout/ConstantsTemp";
import { log } from "util";

class Documents extends React.Component {
  state = {
    reportInfo: null,
    directions: []
  };

  changeDirections = data => {
    if (!this.state.directions.find(item => item.direction == data.direction)) {
      this.setState({
        directions: [...this.state.directions, data]
      });
    } else
      this.setState({
        directions: this.state.directions.filter(
          item => item.direction !== data.direction
        )
      });
  };

  toggleInformationWindow = e => {
    if (e.target) {
      return this.setState({ reportInfo: null });
    }
    this.setState({ reportInfo: e });
  };

  render() {
    const { directions } = this.state;
    const { className, organization } = this.props;
    console.log("changeDirections", directions);

    return (
      <div className={className}>
        <Filters
          activeDirections={directions}
          changeDirections={this.changeDirections}
        />
        <Container onClick={this.toggleInformationWindow}>
          <Content>
            {reports.map(({ date, records }, idx) => {
              console.log();
              return (
                <ReportsContainer
                  key={idx}
                  date={"28 марта 2018"}
                  records={records}
                  organization={organization}
                  directions={directions}
                  toggleInformationWindow={this.toggleInformationWindow}
                />
              );
            })}
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

export default styled(Documents)`
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
