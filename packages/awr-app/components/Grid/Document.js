import React from 'react';
import Link from "next/link";
import IconButton from 'material-ui/IconButton';
// Компоненты
import Tooltip from "../Common/Tooltip";
import DocumentMenu from "./DocumentMenu";
// Константы
import { STATUSES } from "./TempConstants";
// Стайлд компоненты
import {
  DocumentMenuWrapper, DocumentItem,
  DocumentTitle, DocumentInfo, Avatar } from "./Styled/Document";
// Иконки
import MoreVertIcon from 'material-ui-icons/MoreVert';

class Document extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = event => {
    // блокируем переход к просмотру документа при клике на иконку меню
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = e => {
    // блокируем переход к просмотру документа при клике на иконку меню
    e.stopPropagation();
    this.setState({ anchorEl: null });
  };

  getStatus = statusId => {
    const statusKey = Object.keys(STATUSES).filter(key => STATUSES[key].id === statusId)[0];
    return STATUSES[statusKey];
  };

  render() {
    const { anchorEl } = this.state;
    const { document: { name, date, status : statusId, recipient, period } } = this.props;
    const status = this.getStatus(statusId);

    return (
      <Link href="/grid/view">
        <DocumentItem dense button divider>
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
            <IconButton onClick={this.openMenu}>
              <MoreVertIcon />
            </IconButton>
            <DocumentMenu
              anchorEl={anchorEl}
              onClose={this.closeMenu}
              statusId={statusId}
            />
          </DocumentMenuWrapper>
        </DocumentItem>
      </Link>
    );
  }
}

export default Document;
