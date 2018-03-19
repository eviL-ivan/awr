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
  const reportsGroup = records.reduce((prev, item, index) => {
    let recordsData = item.recordReports;
    let data = item;
    //если выбрана кака-то конкретная

    if (organization !== "all") {
      //то фильтруем по ней
      recordsData = item.recordReports.find(
        item => item.organization == organization
      );

      if (recordsData) {
        data = { ...item, recordReports: [recordsData] };
      }
    }

    //пушим элеиенты отчета по записям
    if (recordsData)
      prev.push(
        <ReportContent key={index + item.title} elevation={2}>
          <ReportsGroup
            toggleInformationWindow={toggleInformationWindow}
            data={data}
          />
        </ReportContent>
      );
    return prev;
  }, []);

  if (!reportsGroup.length) return null;

  return (
    <GroupContainer>
      <DataBlock today={date == "Сегодня"}>{data}</DataBlock>
      {reportsGroup}
    </GroupContainer>
  );
}

export default ReportsGroupContainer;

/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const DataBlock = styled.span`
  margin-left: -2px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  padding: 3px 6px;
`;
const ReportContent = styled(Paper)`
  padding: 15px 10px 10px;
  width: 99%;
  display: flex;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const GroupContainer = styled.div`
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
