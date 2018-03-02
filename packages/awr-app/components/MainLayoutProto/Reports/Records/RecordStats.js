import React, { Component } from "react";
import styled from "styled-components";
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
  console.log(props.data);
  const { complite, cancel, warning } = props.data;
  const all = complite + cancel + warning;

  return (
    <StyledRecordStats>
      <Complite less={complite < all}>{complite}</Complite>
      <span>/{all}</span>
    </StyledRecordStats>
  );
};

const StyledRecordStats = styled.div`
  font-size: 20px;
  // font-weight: bold;
`;
const Complite = styled.span`
  color: ${p => p.less && "red"};
`;

export default RecordStats;
