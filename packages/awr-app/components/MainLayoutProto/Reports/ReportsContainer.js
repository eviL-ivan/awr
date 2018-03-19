import React from "react";
import styled from "styled-components";
import RecordsGroup from "./Records/RecordsGroup";
import Paper from "material-ui/Paper";

function ReportsContainer({
  date,
  records,
  toggleInformationWindow,
  organization,
  directions
}) {
  // let _records = records.reduce((prev, item, index) => {
  let recordGroup = null;
  let recordsData = records.recordReports;
  console.log("recordsData", recordsData);
  // console.log("records", records);

  //если выбрана кака-то конкретная
  if (organization !== "all") {
    recordsData = recordsData.filter(item => item.organization == organization);
  }
  console.log("recordsData after", recordsData);
  // console.log("records", records);
  if (recordsData.length) {
    return (
      <Report>
        <DataBlock today={date == "Сегодня"}>{date}</DataBlock>
        <ReportContent elevation={2}>
          <RecordsGroup
            toggleInformationWindow={toggleInformationWindow}
            data={{ ...records, recordReports: recordsData }}
          />
        </ReportContent>
      </Report>
    );
  } else return null;
}

export default ReportsContainer;

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

const Report = styled.div`
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
