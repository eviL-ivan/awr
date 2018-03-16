import React from "react";
import IconButton from "material-ui/IconButton";
import { ListItemIcon, ListItemText } from 'material-ui/List';
// Константы
import { PROFILE_MENU } from "../ConstantsTemp";
// Стайлд
import {
  HeaderRightWrapper, CustomBadge, CustomAvatar,
  TopProfile, ProfileMenu, ProfileMenuItem, UserName
} from "./Styled/HeaderRight";
// Иконки
import PersonIcon from 'material-ui-icons/Person';
import NotificationsIcon from 'material-ui-icons/Notifications';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

class HeaderRight extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <HeaderRightWrapper>
        <IconButton>
          <CustomBadge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </CustomBadge>
        </IconButton>
        <TopProfile button onClick={this.openMenu}>
          <UserName>Вася Пупкин</UserName>
          <CustomAvatar>
            <PersonIcon />
          </CustomAvatar>
          <ExpandMoreIcon />
        </TopProfile>
        <ProfileMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
          anchorOrigin={{vertical: "top", horizontal: "right"}}
          transformOrigin={{vertical: "bottom", horizontal: "right"}}
        >
          {
            PROFILE_MENU.map(item => (
              <ProfileMenuItem divider={item.divider} dense key={item.key}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText inset primary={item.title} />
              </ProfileMenuItem>
            ))
          }
        </ProfileMenu>
      </HeaderRightWrapper>
    )
  }
}

export default HeaderRight;