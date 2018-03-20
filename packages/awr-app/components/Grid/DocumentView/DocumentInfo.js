import React from 'react';
import styled from "styled-components";
import List, { ListItem, ListItemText } from 'material-ui/List';

const DocumentInfoItemText = styled(ListItemText)`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  h3 {
    order: 2;
  }

  p {
    order: 1;
    margin-right: 5px;
  }
`;

const DocumentInfoItem = styled(ListItem)`
  padding-top: 2px;
  padding-bottom: 2px;
`;

const DocumentInfo = ({ recipient, organization, period, deadline }) => (
  <List>
    <DocumentInfoItem><DocumentInfoItemText primary={recipient} secondary="Получатель:" /></DocumentInfoItem>
    <DocumentInfoItem><DocumentInfoItemText primary={organization} secondary="Организация:" /></DocumentInfoItem>
    <DocumentInfoItem><DocumentInfoItemText primary={period} secondary="Период:" /></DocumentInfoItem>
    <DocumentInfoItem><DocumentInfoItemText primary={deadline} secondary="Срок сдачи:" /></DocumentInfoItem>
  </List>
);

export default DocumentInfo;
