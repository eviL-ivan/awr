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
import { Flex, Margin, FlexRow } from "components/Common/positional";
import Button from "material-ui/Button";
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
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <Status status={status} />
        <DescriptionContainer>
          <Flex grow={1}>
            <InfoBlock status={status}>
              <Flex grow={1.5}>
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
            </InfoBlock>
          </Flex>
          {status == "complite" ? (
            <ActionsBlock grow={1} />
          ) : (
            <ActionsBlock grow={1}>
              {status !== "notCreate" && (
                <ActionBtn variant="raised" color="default">
                  <BtnTitle>Редактировать</BtnTitle>
                  <Edit style={{ color: "blue", fontSize: "30px" }} />
                </ActionBtn>
              )}
              {status !== "new" && (
                <ActionBtn variant="raised" color="default">
                  <BtnTitle>Удалить</BtnTitle>
                  <DeleteForever style={{ color: "red", fontSize: "30px" }} />
                </ActionBtn>
              )}
              {!(status == "warning" || status == "cancel") && (
                <ActionBtn variant="raised" color="default">
                  <BtnTitle>Создать</BtnTitle>
                  <CreateNewFolder
                    style={{ color: "green", fontSize: "30px" }}
                  />
                </ActionBtn>
              )}
            </ActionsBlock>
          )}
        </DescriptionContainer>
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

const ActionBtn = styled(Button)`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const BtnTitle = styled.span`
  margin-right: 20px;
`;

const ActionsBlock = Flex.extend`
  justify-content: flex-end;
  align-items: center;
`;
const TitleWithStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-right: 20px;
`;

const InfoBlock = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: inherit;
  opacity: ${p => p.status == "notCreate" && "0.5"};
`;

const Period = styled.div`
  text-decoration: underline;
  margin-right: 20px;
`;

const RecordItemContainer = styled.div`
  &:last-child {
    border-bottom: none;
  }
  flex-direction: row;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a52a2a33;
  background: ${p => p.active && "rgba(171,124,207,0.2)"};
  cursor: ${p => p.active && "pointer"};
`;
