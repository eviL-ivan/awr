import React from 'react';
import styled from "styled-components";
import { IconButton } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from "material-ui/List";
import { Collapse } from 'material-ui/transitions';
import ExpandLess from 'material-ui-icons/ExpandLess';
import Document from "./Document";

const ReportWrapper = styled(ListItem)`
  background: #fff !important;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  color: ${p => p.theme.palette.secondColor} !important;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  render() {
    const { name, description, direction, documents } = this.props;
    const { open } = this.state;

    return [
      <ReportWrapper button onClick={this.handleClick}>
        <div>Circle</div>
        <ReportTitle primary={name} secondary={description} />
        <ReportInfo primary={direction} secondary="Направление" />
        <IconButton>
          <ExpandIcon open={open} />
        </IconButton>
      </ReportWrapper>,
      <Collapse in={open} timeout="auto">
        <List disablePadding>
          {
            documents.map(document => (
              <Document document={document}/>
            ))
          }
        </List>
      </Collapse>
    ]
  }
}

export default Report;
