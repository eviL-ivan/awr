import React from "react";
import styled from "styled-components";
import { withTheme } from "material-ui/styles";

const Layout = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(171, 124, 207, 0.08);
`;
