import React from "react";
import styled from "styled-components";

import ReportsGroup from "./ReportsGroup";

import Paper from "material-ui/Paper";

function ReportsGroupContainer({ date, records, organization, directions }) {
  const _records = records.reduce((prev, item, index) => {
    let Record = null;

    //если все организации
    if (organization === "all") Record = <ReportsGroup data={item} />;
    else {
      //если выбрана кака-то конкретная
      let _recordData = item.recordReports.find(
        item => item.organization === organization
      );
      //тут нужно будет поставить отдельное отображения для одного отчета
      if (_recordData) {
        const _item = { ...item, recordReports: [_recordData] };
        Record = <ReportsGroup data={_item} />;
      }
    }
    //пушим элеиенты отчета по записям
    if (Record)
      prev.push(
        <GroupContainer key={index + item.title} elevation={2}>
          {Record}
        </GroupContainer>
      );
    return prev;
  }, []);
  if (!_records.length) return null;
  return (
    <Container>
      <DateBlock today={date === "Сегодня"}>{date}</DateBlock>
      {_records}
    </Container>
  );
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
  width: 99%;
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
