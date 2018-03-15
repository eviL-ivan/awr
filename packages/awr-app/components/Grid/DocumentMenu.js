import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from "material-ui/List";
// Константы
import { DOCUMENT_MENU } from "./TempConstants";

class DocumentMenu extends React.Component {
  render() {
    const { anchorEl, onClose, statusId } = this.props;

    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {
          DOCUMENT_MENU.map(item => (
            item.statuses.includes(statusId)
              ? <MenuItem divider={item.divider} dense onClick={onClose} key={item.key}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText inset primary={item.title} />
                </MenuItem>
              : null
          ))
        }
      </Menu>
    );
  }
}

export default DocumentMenu;
