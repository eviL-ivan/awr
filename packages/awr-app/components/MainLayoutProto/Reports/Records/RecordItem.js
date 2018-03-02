import React from "react";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import DoneIcon from "material-ui-icons/Person";
import LogoDirection from "./LogoDirection";
import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import RecordTitle from "./RecordTitle";
import Status from "./Status";
import ReportDirectionBadge from "../../Common/ReportDirectionBadge";
import ReportPeriodBlock from "../../Common/ReportPeriodBlock";
import RecordSmallInfoBlock from "./RecordSmallInfoBlock";
class RecordItem extends React.Component {
  state = {
    hover: false
  };
  render() {
    const {
      title,
      inGroup = false,
      direction,
      data: {
        organizationTitle,
        sendData,
        docLink,
        docTitle,
        period,
        recipient,
        status
      }
    } = this.props;
    return (
      <RecordItemContainer
        inGroup={inGroup}
        active={this.state.hover}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <TitleBlock inGroup={inGroup}>
          <TitleWithStatusContainer inGroup={inGroup}>
            <Status status={status} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              {!inGroup && <ReportDirectionBadge direction={direction} />}
              <RecordTitle title={title} />
            </div>
          </TitleWithStatusContainer>
          {!inGroup && <ReportPeriodBlock />}
        </TitleBlock>
        <div>
          <InfoBlock>
            <div
              style={{ display: "flex", flexDirection: "row", width: "60%" }}
            >
              <Flex grow={1}>
                <Margin right={60}>
                  <RecordSmallInfoBlock
                    title="Организация"
                    data={organizationTitle}
                  />
                </Margin>
              </Flex>
              <Flex grow={1}>
                <Margin right={60}>
                  <RecordSmallInfoBlock title="Кому" data={recipient.title} />
                </Margin>
              </Flex>
              <Flex grow={1}>
                <RecordSmallInfoBlock title="Отправлено" data={sendData} />
              </Flex>
            </div>
          </InfoBlock>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Edit
              style={{ color: "blue", fontSize: "30px", marginRight: "10px" }}
            />
            <DeleteForever
              style={{ color: "red", fontSize: "30px", marginRight: "10px" }}
            />
            <CreateNewFolder
              style={{ color: "green", fontSize: "30px", marginRight: "10px" }}
            />
          </div>
        </div>
      </RecordItemContainer>
    );
  }
  onMouseEnterHandler = () => {
    this.setState({
      hover: true
    });
  };
  onMouseLeaveHandler = () => {
    this.setState({
      hover: false
    });
  };
}

export default RecordItem;

const TitleWithStatusContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: ${p => (p.inGroup ? "" : "space-between")};
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: ${p => (!p.inGroup ? "100%" : "auto")};
  justify-content: ${p => (p.inGroup ? "" : "space-between")};
  margin-right: 20px;
`;
// const RecordItemContainer = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
// `;

const InfoBlock = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: inherit;
`;
const Margin = styled.div`
  display: flex;
  margin-left: ${p => (p.left ? p.left + "px" : 0)};
  margin-right: ${p => (p.right ? p.right + "px" : 0)};
  margin-bottom: ${p => (p.bottom ? p.bottom + "px" : 0)};
  margin-top: ${p => (p.top ? p.top + "px" : 0)};
`;

const Flex = styled.div`
  display: flex;
  flex: ${p => (p.grow ? p.grow : 0)};
`;
const Period = styled.div`
  text-decoration: underline;
  margin-right: 20px;
`;

const RecordItemContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${p => p.inGroup && "1px solid #a52a2a33"};
  padding: 3px;
  // margin-left: 10px;
  background: ${p => p.active && "rgba(171,124,207,0.2)"};
  cursor: ${p => p.active && "pointer"};
`;
