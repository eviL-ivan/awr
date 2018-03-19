import React from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';

export const ReportWrapper = styled(ListItem)`
  background: #fff;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  color: ${p => p.theme.palette.secondColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  &:hover {
    background: #f9f9f9;
  }
`;

export const ReportTitle = styled(ListItemText)`
  flex-grow: 1;
`;

export const ReportInfo = styled(ListItemText)`
  padding: 0 20px;
  display: flex;
  flex-grow: 0;
  flex-direction: column-reverse;
  align-items: center;
`;

export const ExpandIcon = styled(ExpandLess)`
  transform: rotate(${p => (p.open ? '0deg' : '180deg')});
  transition: all 0.3s;
`;
