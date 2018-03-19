import React from "react";
import Link from "next/link";
import IconButton from "material-ui/IconButton";
// Компоненты
import Tooltip from "../Common/Tooltip";
import DocumentMenu from "./DocumentMenu";
// Константы
import { STATUSES } from "./TempConstants";
// Стайлд компоненты
import {
  DocumentMenuWrapper,
  DocumentItem,
  DocumentTitle,
  DocumentInfo,
  Avatar
} from "./Styled/Document";
// Иконки
import MoreVertIcon from "material-ui-icons/MoreVert";

class Document extends React.Component {
  state = {
    anchorEl: null
  };

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = e => {
    this.setState({ anchorEl: null });
  };

  getStatus = statusId => {
    const statusKey = Object.keys(STATUSES).filter(
      key => STATUSES[key].id === statusId
    )[0];
    return STATUSES[statusKey];
  };

  render() {
    const { anchorEl } = this.state;
    const {
      document: { name, date, status: statusId, recipient, period }
    } = this.props;
    const status = this.getStatus(statusId);

    return (
      <DocumentItem dense button divider>
        <Tooltip title={status.title} placement="right">
          <Avatar style={{ background: status.color }} new={status.id === 0}>
            {status.icon}
          </Avatar>
        </Tooltip>
        <Link href="/grid/view">
          <DocumentTitle primary={name} />
        </Link>
        <DocumentInfo primary={status.title} secondary="Статус" />
<<<<<<< HEAD
        {date && <DocumentInfo primary={date} secondary="Дата" />}
=======
        {
          date &&
          <DocumentInfo primary={date} secondary="Дата" />
        }
>>>>>>> 542a227a1fda82be0e4a213294849d36497e6ebb
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
    );
  }
}

export default Document;
