import React from 'react';
import styled from "styled-components";
import { ListItem, ListItemText } from "material-ui/List";
import { Avatar as MUIAvatar, Tooltip as MuiTooltip } from "material-ui";

export const DocumentMenuWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  opacity: .1;
`;

export const DocumentItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff !important;
  padding: 5px 20px 5px 30px !important;
  border-left: 1px solid #e3e4e8 !important;
  border-right: 1px solid #e3e4e8 !important;
  color: ${p => p.theme.palette.secondColor} !important;
  
  &:first-of-type {
    box-shadow: inset 0 4px 7px #eee;
  }
  
  &:last-of-type {
    margin-bottom: 20px;
  }
  
  &:hover {
    background: #f9f9f9 !important;
 
    ${DocumentMenuWrapper} {
      opacity: 1;
    }
  }
`;

export const DocumentTitle = styled(ListItemText)`
  flex: 0 0 20% !important;
  padding: 0 20px !important;
`;

export const DocumentInfo = styled(ListItemText)`
  text-align: center;
  padding: 0 20px !important;
  display: flex;
  flex-grow: 0 !important;
  flex-direction: column-reverse !important;
  align-items: center !important;
  flex-basis: 15% !important;
  justify-content: flex-end !important;
`;

export const Tooltip = styled(MuiTooltip)`
  div {
    font-size: .8rem !important;
  }
`;

export const Avatar = styled(MUIAvatar)`
  width: 32px !important;
  height: 32px !important;
  border: ${p => p.new && "1.5px dashed #ccc"};
  ${p => p.new ? 'svg' : '__none'} {
    color: #ccc;
  }
`;