import React, { Component } from "react";
import styled from "styled-components";
import { Line, Circle } from "rc-progress";

// class RecordStats extends Component {
//   render() {
//     const { complite, cancel } = this.props.data;
//     return (
//       <div>
//         <span>
//           {complite}/{complite + cancel}
//         </span>
//       </div>
//     );
//   }
// }

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

const StatsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
const CircleContainer = styled(Circle)`
  width: 60px;
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
