import React from "react";
import styled from "styled-components";

const Logo = ({ className }) => (
  <div className={className}>
    <img src="static/images/logo.png" />
  </div>
);

export default styled(Logo)`
  text-align: center;
  margin-bottom: 10px;

  img {
    height: ${p => p.theme.sign.logo.height};
    max-width: 100%;
  }
`;