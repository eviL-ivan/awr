import React from 'react';
import styled from "styled-components";
import { Paper } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from "material-ui/List";
import { STATUSES } from "./TempConstants";

const DocumentItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 20px !important;
  border-left: 1px solid #e3e4e8;
  border-right: 1px solid #e3e4e8;
  
  &:first-of-type {
    box-shadow: inset 0 4px 7px #eee;
  }
  
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

const DocumentTitle = styled(ListItemText)`
  flex: 0 0 20% !important;
`;

const DocumentInfo = styled(ListItemText)`
  text-align: center;
  padding: 0 20px !important;
  display: flex;
  flex-grow: 0 !important;
  flex-direction: column-reverse !important;
  align-items: center !important;
  flex-basis: 15% !important;
  justify-content: flex-end !important;
`;

class Document extends React.Component {
  getStatus = statusId => STATUSES.filter(status => status.id === statusId)[0];

  render() {
    const { document: { name, date, status : statusId, recipient, period } } = this.props;
    const status = this.getStatus(statusId);

    return (
      <DocumentItem divider>
        <ListItemIcon>{status.icon}</ListItemIcon>
        <DocumentTitle primary={name} />
        <DocumentInfo primary={status.title} secondary="Статус" />
        {
          date &&
            <DocumentInfo primary={date} secondary="Дата" />
        }
        <DocumentInfo primary={recipient} secondary="Получатель" />
        <DocumentInfo primary={period} secondary="Период" />
        </DocumentItem>
    );
  }
}

export default Document;
