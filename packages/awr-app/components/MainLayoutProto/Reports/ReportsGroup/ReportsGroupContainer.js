import React from "react";
import styled from "styled-components";

import ReportsGroup from "./ReportsGroup";

import Paper from "material-ui/Paper";

function ReportsGroupContainer({
  date,
  records,
  toggleInformationWindow,
  organization,
  directions
}) {
  let recordsData = records.recordReports;
  //если выбрана кака-то конкретная
  if (organization !== "all") {
    recordsData = recordsData.filter(
      item => item.organization === organization
    );
  }
  if (recordsData.length) {
    return (
      <Container>
        <DateBlock today={date === "Сегодня"}>{date}</DateBlock>
        <GroupContainer elevation={2}>
          <ReportsGroup
            toggleInformationWindow={toggleInformationWindow}
            data={{ ...records, recordReports: recordsData }}
          />
        </GroupContainer>
      </Container>
    );
  } else return null;
}

export default ReportsGroupContainer;

/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const DateBlock = styled.span`
  margin-left: -2px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  padding: 3px 6px;
`;
const GroupContainer = styled(Paper)`
  padding: 10px;
  width: 100%;
  display: flex;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  transition: all;
  align-items: start;
  justify-content: center;
  width: 100%;
  &:not(:first-child) {
    margin-top: 30px;
  }
`;
