import React from "react";
import styled from "styled-components";

const ReportDirectionBadge = ({ direction }) => {
  console.log("ReportDirectionBadge", direction);
  return <Container>{directionConf[direction]}</Container>;
};
export default ReportDirectionBadge;

const Container = styled.div`
  color: white;
  background: #422af3;
  padding: 5px 10px;
  margin-right: 10px;
`;

const directionConf = {
  fns: "ФНС",
  rpn: "РПН"
};
