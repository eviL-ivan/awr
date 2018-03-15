import React from 'react';
import styled from "styled-components";
import { Avatar as MUIAvatar, Tooltip as MuiTooltip } from "material-ui";
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { ListItem, ListItemText } from "material-ui/List";
import { STATUSES } from "./TempConstants";
import DocumentMenu from "./DocumentMenu";

const DocumentMenuWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  opacity: .1;
`;

const DocumentItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff !important;
  padding: 10px 20px !important;
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

const Tooltip = styled(MuiTooltip)`
  div {
    font-size: .8rem !important;
  }
`;

const Avatar = styled(MUIAvatar)`
  border: ${p => p.new && "1.5px dashed #ccc"};
  ${p => p.new ? 'svg' : '__none'} {
    color: #ccc;
  }
`;

class Document extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  getStatus = statusId => STATUSES.filter(status => status.id === statusId)[0];

  render() {
    const { anchorEl } = this.state;
    const { document: { name, date, status : statusId, recipient, period } } = this.props;
    const status = this.getStatus(statusId);

    return (
      <DocumentItem button divider>
        <Tooltip title={status.title} placement="right">
          <Avatar style={{background: status.color}} new={status.id === 0}>
            {status.icon}
          </Avatar>
        </Tooltip>
        <DocumentTitle primary={name} />
        <DocumentInfo primary={status.title} secondary="Статус" />
        {
          date &&
            <DocumentInfo primary={date} secondary="Дата" />
        }
        <DocumentInfo primary={recipient} secondary="Получатель" />
        <DocumentInfo primary={period} secondary="Период" />
        <DocumentMenuWrapper>
          <IconButton onClick={this.handleClick}>
            <MoreVertIcon />
          </IconButton>
          <DocumentMenu
            anchorEl={anchorEl}
            onClose={this.handleClose}
            statusId={statusId}
          />
        </DocumentMenuWrapper>
      </DocumentItem>
    );
  }
}

export default Document;
