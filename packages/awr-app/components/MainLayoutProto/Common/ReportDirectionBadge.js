import React from "react";
import styled from "styled-components";

const ReportDirectionBadge = ({ directionTitle, direction, inGroup }) => {
  return (
    <Container direction={direction} inGroup={inGroup}>
      {directionTitle}
    </Container>
  );
};
export default ReportDirectionBadge;
/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const Container = styled.div`
  /* border-bottom: 1px solid #212121;
  border-right: 1px solid #212121; */
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    2px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 3px 1px -2px rgba(0, 0, 0, 0.22);
  position: relative;
  color: white;
  background: ${p => p.theme.directionColor[p.direction]};
  padding: 5px 10px;
  margin-right: 10px;
  margin-left: -20px;
  text-transform: uppercase;
  &:after {
    content: "";
    z-index: 1;
    display: block;
    border-top: 5px solid #424242;
    position: absolute;
    background: transparent;
    border-right: 5px solid #424242;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    left: 0px;
    bottom: -10px;
  }
`;

const directionConf = {
  fns: "ФНС",
  rpn: "РПН"
};
