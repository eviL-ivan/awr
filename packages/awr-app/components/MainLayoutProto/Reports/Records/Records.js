import React, { Component } from "react";

import RowDirection from "../../Common/RowDirection";
import Status from "./Status";
import LogoDirection from "./LogoDirection";
import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import styled from "styled-components";
import RecordItem from "./RecordItem";
import RecordTitle from "./RecordTitle";
import RecordStats from "./RecordStats";
import ReportDirectionBadge from "../../Common/ReportDirectionBadge";
import ReportPeriodBlock from "../../Common/ReportPeriodBlock";

class RecordsGroup extends Component {
  state = {
    stats: {},
    hover: false
  };
  componentDidMount() {
    const stats = this.props.data.recordReports.reduce(
      (prev, item) => {
        ++prev[item.status];
        return prev;
      },
      {
        complite: 0,
        cancel: 0,
        warning: 0
      }
    );
    this.setState({ stats });
  }

  render() {
    const { stats, hover } = this.state;
    const { data: { title, direction, recordReports } } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <TitleContainer>
          <TitleBlock>
            <ReportDirectionBadge inGroup direction={direction} />
            <RecordTitle title={title} />
            {recordReports.length !== 1 && <RecordStats data={stats} />}
          </TitleBlock>
          <LeftTitleBlock>
            <ReportPeriodBlock />
          </LeftTitleBlock>
        </TitleContainer>
        <GroupContainer>
          {recordReports.map((item, index) => {
            return <RecordItem inGroup data={item} />;
          })}
        </GroupContainer>
      </div>
    );
  }
  onMouseEnterHandler = index => () => {
    this.setState({
      hover: index
    });
  };
  onMouseLeaveHandler = () => {
    this.setState({
      hover: false
    });
  };
}

export default styled(RecordsGroup)`
  padding: 20px;
  font-size: 18px;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

const RightTitleBlock = styled.div``;

const LeftTitleBlock = TitleBlock.extend`
  justify-content: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Period = styled.div`
  text-decoration: underline;
  margin-right: 20px;
`;

const GroupContainer = styled.div`
  padding: 10px 0;
  margin-left: 21px;
`;
