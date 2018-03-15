import React from 'react';
import styled from "styled-components";
import { ListItem, ListItemText } from "material-ui/List";
import ExpandLess from 'material-ui-icons/ExpandLess';

export const ReportWrapper = styled(ListItem)`
  background: #fff !important;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  color: ${p => p.theme.palette.secondColor} !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px !important;
  
  &:hover {
    background: #f9f9f9 !important; 
  }
`;

export const ReportTitle = styled(ListItemText)`
  flex-grow: 1;
`;

export const ReportInfo = styled(ListItemText)`
  padding: 0 20px !important;
  display: flex;
  flex-grow: 0 !important;
  flex-direction: column-reverse !important;
  align-items: center !important;
`;

export const ExpandIcon = styled(ExpandLess)`
  transform: rotate(${p => p.open ? "0deg" : "180deg"});
  transition: all .3s !important;
`;