import React from "react";
import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const LinksWrapper = styled.div`
  // margin-top: 0px;
  display: flex;
  justify-content: space-between;
`;

export const CustomLink = styled.span`
  cursor: pointer;
  color: ${p => p.theme.palette.mainColor};
  text-decoration: none;

  &:hover {
    color: ${p => p.theme.palette.secondColor};
    text-decoration: underline;
  }
`;

export const CustomTitle = styled.h3`
  margin: 0;
  margin-bottom: 5px;
`;

export const CustomSubTitle = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;