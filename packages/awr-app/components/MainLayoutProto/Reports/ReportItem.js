import React from "react";
import styled from "styled-components";
import RecordItem from "./Records/RecordItem";
import RecordsGroup from "./Records/RecordsGroup";
import Paper from "material-ui/Paper";

function ReportItem({ data, records, organization, directions }) {
  const _records = records.reduce((prev, item) => {
    let Record = null;
    if (organization == "all") Record = <RecordsGroup data={item} />;
    else {
      let _recordData = item.recordReports.find(
        item => item.organization == organization
      );

      if (_recordData)
        Record = (
          <RecordItem
            key={Math.random()}
            data={_recordData}
            title={item.title}
            organization={organization}
            directions={directions}
            direction={item.direction}
          />
        );
    }
    if (Record)
      prev.push(
        <ReportContent zDepth={1}>
          <DataBlock today={data == "Сегодня"}>{data}</DataBlock>
          {Record}
        </ReportContent>
      );
    return prev;
  }, []);

  if (!_records.length) return null;
  return <Report>{_records}</Report>;
}

export default ReportItem;

const DataBlock = styled(Paper)`
  font-size: 10;
  display: flex;
  margin-bottom: 10px;
  font-weight: bold;
  justify-content: center;
  padding: 3px 6px;
  //position: absolute;
  background: ${p => (p.today ? "red" : "#fb8c0033")} !important;
  // left: 10px;
  // top: -20px;
`;
const ReportContent = styled(Paper)`
  padding: 15px 10px 10px;
  width: 99%;
  display: flex;
  flex-wrap: wrap;
  //flex-direction:column;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  //height:95%;
`;

const Report = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  //padding: 15px 5px;
  //height:500px;
  //background-color: rgba(171, 124, 207, 0.2);
  &:not(:first-child) {
    margin-top: 30px;
  }
`;
