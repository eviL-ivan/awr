import React from "react";
import styled from "styled-components";

const Row = ({ children }) => {
  return <RowDirection>{children}</RowDirection>;
};

export default Row;
const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
`;
