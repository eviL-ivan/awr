import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex: ${p => (p.grow ? p.grow : 1)};
`;

// flex-basis: ${p => {
//   console.log("flex-basis", p.basis);
//   return p.basis ? p.basis : "100%";
// }};
// flex-shrink: ${p => {
//   console.log("flex-basis", p.shrink);
//   return p.shrink ? p.shrink : 1;
// }};

const FlexRow = Flex.extend`
  flex-direction: row;
`;
const FlexColumn = Flex.extend`
  flex-direction: column;
`;

const Margin = styled.div`
  display: flex;
  margin-left: ${p => (p.left ? p.left + "px" : 0)};
  margin-right: ${p => (p.right ? p.right + "px" : 0)};
  margin-bottom: ${p => (p.bottom ? p.bottom + "px" : 0)};
  margin-top: ${p => (p.top ? p.top + "px" : 0)};
`;

export { Flex, Margin, FlexRow, FlexColumn };
