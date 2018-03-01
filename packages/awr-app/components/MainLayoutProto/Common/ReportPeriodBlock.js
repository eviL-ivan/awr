import React from "react";
import styled from "styled-components";
import DateRange from "material-ui-icons/DateRange";

const ReportPeriodBlock = () => {
  return (
    <PeriodContainer>
      <DateRange />
      <Period>4 квартал 2016г</Period>
    </PeriodContainer>
  );
};

export default ReportPeriodBlock;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  width: 150px;
  justify-content: space-between;
`;
const Period = styled.div`
  /* text-decoration: underline; */
  //margin-right: 20px;
`;

{
  /* <span
style={{
  paddingRight: "4px",
  fontSize: "12px",
  color: "gray",
  marginLeft: "10px"
}}
>
Период:
</span> */
}
