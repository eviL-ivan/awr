import React from "react";
import styled from "styled-components";

const RecordSmallInfoBlock = ({ className, data, title }) => (
  <div className={className}>
    {/* <Chip label={data} /> */}
    {title && <TitleConatiner>{title}:</TitleConatiner>}

    <DataContainer>{data}</DataContainer>
    {/* <Chip label={data} /> */}
  </div>
);

export default styled(RecordSmallInfoBlock)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const TitleConatiner = styled.span`
  display: flex;

  margin-right: 5px;
  padding-right: 4px;

  font-size: 14px;
  color: gray;
`;

const DataContainer = styled.span`
  font-size: 17px;
  color: black;
`;
