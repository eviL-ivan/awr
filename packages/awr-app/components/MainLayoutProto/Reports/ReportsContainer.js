import React from "react";
import styled from "styled-components";
import Records from "./Records/Records";
import Paper from "material-ui/Paper";

function ReportsContainer({
  data,
  records,
  toggleInformationWindow,
  organization,
  directions
}) {
  const _records = records.reduce((prev, item, index) => {
    let Record = null;
    //если все организации
    if (organization == "all")
      Record = (
        <Records
          toggleInformationWindow={toggleInformationWindow}
          data={item}
        />
      );
    else {
      //если выбрана кака-то конкретная
      let _recordData = item.recordReports.find(
        item => item.organization == organization
      );
      if (_recordData) {
        const _item = { ...item, recordReports: [_recordData] };
        Record = (
          <Records
            toggleInformationWindow={toggleInformationWindow}
            data={_item}
          />
        );
      }
    }
    //пушим элеиенты отчета по записям
    if (Record)
      prev.push(
        <ReportContent key={index + item.title} elevation={2}>
          {Record}
        </ReportContent>
      );
    return prev;
  }, []);
  if (!_records.length) return null;
  return (
    <Report>
      <DataBlock today={data == "Сегодня"}>{data}</DataBlock>
      {_records}
    </Report>
  );
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
