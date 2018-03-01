import React from "react";
import styled from "styled-components";
const RecordSmallInfoBlock = ({ className, data, title }) => (
  <div className={className}>
    <TitleConatiner>{title}:</TitleConatiner>
    <DataContainer>{data}</DataContainer>
  </div>
);

export default styled(RecordSmallInfoBlock)`
  display: flex;
`;

const TitleConatiner = styled.span`
  display: flex;
  padding-right: 4px;
  font-size: 12px;
  color: gray;
`;

const DataContainer = styled.span`
  color: black;
`;
