import React from "react";
import styled from "styled-components";

const Title = ({ title }) => <RecordTitle>{title}</RecordTitle>;

export default Title;

const RecordTitle = styled.div`
  text-transform: UpperCase;
  font-weight: 500;
  margin-right: 20px;
  font-size: 22px;
`;
