import React from "react";
import styled from "styled-components";

import Status from "./Status";
import RecordSmallInfoBlock from "./SmallInfoBlock";
import { Flex, Margin } from "components/Common/positional";
import Actions from "./Actions";

class RecordItem extends React.Component {
  state = {
    hover: false
  };
  render() {
    const {
      inGroup = false,
      data: { organizationTitle, sendData, recipient, status }
    } = this.props;

    return (
      <RecordItemContainer
        inGroup={inGroup}
        active={this.state.hover}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.openInfo}
      >
        <Flex grow={0.11}>
          <Status status={status} />
        </Flex>
        <DescriptionContainer>
          <Flex grow={2}>
            <InfoBlock status={status}>
              <Flex grow={1.1}>
                <Margin right={60}>
                  <RecordSmallInfoBlock data={organizationTitle} />
                </Margin>
              </Flex>
              <Flex grow={1}>
                <Margin right={60}>
                  <RecordSmallInfoBlock data={recipient.title} />
                </Margin>
              </Flex>
              <Flex grow={1}>
                <RecordSmallInfoBlock data={sendData} />
              </Flex>
              <Flex grow={1}>
                <RecordSmallInfoBlock data={"4 квартал 2016г"} />
              </Flex>
            </InfoBlock>
          </Flex>
          <Actions status={status} hover={this.state.hover} />
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
  openInfo = e => {
    e.stopPropagation();
    this.props.toggleInformationWindow(this.props.data);
  };
}

export default RecordItem;

export const RecordItemTitles = ({ inGroup }) => {
  return (
    <TitlesContainer inGroup={inGroup}>
      <Flex grow={0.11}>
        <StatusContainer>
          <RecordSmallInfoBlock title="Статус" />
        </StatusContainer>
      </Flex>
      <DescriptionContainer>
        <Flex grow={2}>
          <InfoBlock>
            <Flex grow={1.1}>
              <Margin right={60}>
                <RecordSmallInfoBlock title="Организация" />
              </Margin>
            </Flex>
            <Flex grow={1}>
              <Margin right={60}>
                <RecordSmallInfoBlock title="Кому" />
              </Margin>
            </Flex>
            <Flex grow={1}>
              <RecordSmallInfoBlock title="Отправлено" />
            </Flex>
            <Flex grow={1}>
              <RecordSmallInfoBlock title="Период" />
            </Flex>
          </InfoBlock>
        </Flex>
        <Flex grow={1} />
      </DescriptionContainer>
    </TitlesContainer>
  );
};

/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  align-items: center;

  width: 100%;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: inherit;

  width: 100%;

  opacity: ${p => p.status === "notCreate" && "0.5"};
`;

const RecordItemContainer = styled.div`
  &:last-child {
    border-bottom: none;
  }

  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;

  padding: 10px 10px;

  border-bottom: 1px solid #a52a2a33;

  background: ${p => p.active && "rgba(171,124,207,0.2)"};

  cursor: ${p => p.active && "pointer"};
`;

const StatusContainer = styled.span`
  width: 50px;
  margin-right: 20px;
`;

const TitlesContainer = RecordItemContainer.extend`
  &:first-child {
    box-shadow: 0px 8px 16px -10px rgba(0, 0, 0, 0.12);
  }
`;
