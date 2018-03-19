import React from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText } from 'material-ui/List';
import { Avatar as MUIAvatar } from 'material-ui';

export const DocumentMenuWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  opacity: 0.1;
`;

export const DocumentItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 5px 20px 5px 30px;
  border-left: 1px solid #e3e4e8;
  border-right: 1px solid #e3e4e8;
  color: ${p => p.theme.palette.secondColor};
  font-size: 14px;

  &:first-of-type {
    box-shadow: inset 0 4px 7px #eee;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:hover {
    background: #f9f9f9;

    ${DocumentMenuWrapper} {
      opacity: 1;
    }
  }
`;

export const DocumentTitle = styled(ListItemText)`
  flex: 0 0 20%;
  padding: 0 20px;
  font-size: inherit;
`;

export const DocumentInfo = styled(ListItemText)`
  text-align: center;
  padding: 0 20px;
  display: flex;
  flex-grow: 0;
  flex-direction: column-reverse;
  align-items: center;
  flex-basis: 15%;
  justify-content: flex-end;
  font-size: inherit;
`;

export const Avatar = styled(MUIAvatar)`
  width: 34px;
  height: 34px;
  border: ${p => p.new && '1.5px dashed #ccc'};
  ${p => (p.new ? 'svg' : '__none')} {
    color: #ccc;
  }
`;
