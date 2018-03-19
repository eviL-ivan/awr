import React from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";

const RecordStats = props => {
  const { complite, cancel, warning, notCreate } = props.data;
  const all = complite + cancel + warning + notCreate;

  const percent = Math.floor(complite / all * 100);
  return (
    <StyledRecordStats>
      <StatsContainer>
        <Complite less={complite < all}>{complite}</Complite>
        <span>/{all}</span>
      </StatsContainer>
      <CircleContainer percent={percent} strokeWidth="10" trailWidth="10" />
    </StyledRecordStats>
  );
};
/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const StatsContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 16px;
`;
const CircleContainer = styled(Circle)`
  width: 60px;
  height: 60px;
`;
const StyledRecordStats = styled.div`
  position: relative;

  display: flex;

  font-size: 20px;
`;
const Complite = styled.span`
  color: ${p => p.less && "red"};
`;

export default RecordStats;
