import React from 'react';
import styled from "styled-components";
import { IconButton } from "material-ui";
import List, { ListItem, ListItemText } from "material-ui/List";
import { Collapse } from 'material-ui/transitions';
import ExpandLess from 'material-ui-icons/ExpandLess';
import CircularProgressBar from "../Common/CircularProgressBar";
import Document from "./Document";

const ReportWrapper = styled(ListItem)`
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

const ReportTitle = styled(ListItemText)`
  flex-grow: 1;
`;

const ReportInfo = styled(ListItemText)`
  padding: 0 20px !important;
  display: flex;
  flex-grow: 0 !important;
  flex-direction: column-reverse !important;
  align-items: center !important;
`;

const ExpandIcon = styled(ExpandLess)`
  transform: rotate(${p => p.open ? "0deg" : "180deg"});
  transition: all .3s !important;
`;

class Report extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  getTotal = () => this.props.documents.length;
  getCompleted = () => this.props.documents.reduce((count, report) => report.status === 3 ? ++count : count, 0);

  sortDocuments = (field, ascending = true) => {
    const compare = (a,b) => {
      if (a[field] < b[field])
        return -1;
      if (a[field] > b[field])
        return 1;
      return 0;
    };

    return ascending
      ? this.props.documents.sort(compare)
      : this.props.documents.sort(compare).reverse();
  };

  render() {
    const { name, description, direction } = this.props;
    const { open } = this.state;

    return [
      <ReportWrapper button onClick={this.handleClick}>
        <CircularProgressBar
          strokeWidth={4}
          sqSize={55}
          percentage={parseInt(this.getCompleted()/this.getTotal()*100)}
          text={`${this.getCompleted()}/${this.getTotal()}`}
        />
        <ReportTitle primary={name} secondary={description} />
        <ReportInfo primary={direction} secondary="Направление" />
        <IconButton>
          <ExpandIcon open={open} />
        </IconButton>
      </ReportWrapper>,
      <Collapse in={open} timeout="auto">
        <List disablePadding>
          {
            this.sortDocuments("status", false).map(document => (
              <Document document={document}/>
            ))
          }
        </List>
      </Collapse>
    ]
  }
}

export default Report;
