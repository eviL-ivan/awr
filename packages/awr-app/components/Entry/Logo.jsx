import React from "react";
import styled from "styled-components";

const Logo = ({ className }) => (
  <div className={className}>
    <img src="https://psv4.userapi.com/c834604/u93145868/docs/d7/ee5d8eceab5f/logo.png" />
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