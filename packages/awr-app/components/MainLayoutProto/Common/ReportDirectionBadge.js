import React from "react";
import styled from "styled-components";

const ReportDirectionBadge = ({ direction, inGroup }) => {
  console.log("ReportDirectionBadge", direction);
  return <Container inGroup={inGroup}>{directionConf[direction]}</Container>;
};
export default ReportDirectionBadge;

const Container = styled.div`
  color: white;
  background: #422af3;
  padding: 5px 10px;
  margin-right: 10px;
  margin-left: -20px;
  ${p =>
    p.inGroup &&
    `&:after {
    content: "";
    display: block;
    border-top: 7px solid #080000;
    position: absolute;
    margin-left: -11px;
    height: 8px;
    width: 1px;
    z-index: 1000000;
    background: transparent;
    border-right: 5px solid #000003;
    border-left: 7px solid transparent;
    border-bottom: 5px solid transparent;
    margin-bottom: 8px;
    margin-top: 5px;
  }`};
`;

const directionConf = {
  fns: "ФНС",
  rpn: "РПН"
};
