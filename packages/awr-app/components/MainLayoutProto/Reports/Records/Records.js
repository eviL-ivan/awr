import React, { Component } from "react";

import RowDirection from "../../Common/RowDirection";
import Status from "./Status";
import LogoDirection from "./LogoDirection";
import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import styled from "styled-components";
import RecordItem, { RecordItemTitles } from "./RecordItem";
import RecordTitle from "./RecordTitle";
import RecordStats from "./RecordStats";
import ReportDirectionBadge from "../../Common/ReportDirectionBadge";
import ReportPeriodBlock from "../../Common/ReportPeriodBlock";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import IconButton from "material-ui/IconButton";

class RecordsGroup extends Component {
  state = {
    stats: {},
    hover: false,
    checked: false
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
        warning: 0,
        notCreate: 0
      }
    );
    this.setState({ stats });
  }

  render() {
    const { stats, hover, checked } = this.state;
    const {
      data: { title, direction, directionTitle, recordReports },
      className
    } = this.props;

    return (
      <div className={className}>
        <TitleContainer inGroup>
          <TitleBlock inGroup>
            <ReportDirectionBadge
              inGroup
              directionTitle={directionTitle}
              direction={direction}
            />
            <RecordTitle title={title} />
          </TitleBlock>
          <LeftTitleBlock>
            {recordReports.length !== 1 && <RecordStats data={stats} />}
          </LeftTitleBlock>
        </TitleContainer>
        <GroupContainer>
          <RecordItemTitles inGroup />
          {recordReports.length > 3 ? (
            <Collapse in={checked} collapsedHeight="270px">
              {recordReports.map((item, index) => {
                return <RecordItem inGroup data={item} />;
              })}
            </Collapse>
          ) : (
            recordReports.map((item, index) => {
              return <RecordItem inGroup data={item} />;
            })
          )}
        </GroupContainer>
        <ColapseBtnContainer>
          {recordReports.length > 3 && (
            <IconButton
              onClick={() => this.setState({ checked: !this.state.checked })}
            >
              {checked ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ColapseBtnContainer>
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
  font-size: 18px;
  width: 100%;
`;
/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const ColapseBtnContainer = styled.div`
  display: flex;
  justify-content: center;
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
  position: relative;
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
  padding: 0 15px 15px;
`;
