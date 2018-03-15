import React from "react";
import styled from "styled-components";
import IconButton from 'material-ui/IconButton';
import { ListItemIcon, ListItemText } from 'material-ui/List';
// Константы
import { PROFILE_MENU } from "../ConstantsTemp";
// Компоненты
import ToggleSidebarButton from "./ToggleSidebarButton";
// Стайлд
import {
  HeaderLeft, HeaderRight, TopProfile,
  CustomBadge, ProfileMenuItem, ProfileMenu,
  CustomAvatar, UserName } from "./Styled/Header";
// Иконки
import PersonIcon from 'material-ui-icons/Person';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import NotificationsIcon from 'material-ui-icons/Notifications';

class Header extends React.Component {
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
    const { className, sidebarExpanded, toggleSidebar } = this.props;
    const { anchorEl } = this.state;

    return (
      <header className={className}>
        <HeaderLeft>
          <ToggleSidebarButton
            open={sidebarExpanded}
            onToggle={toggleSidebar}
          />
        </HeaderLeft>
        <HeaderRight>
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
        </HeaderRight>
      </header>
    )
  }
}

export default styled(Header)`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-sizing: border-box;
  height: ${p => p.theme.header.height};
  background: ${p => p.theme.palette.mainColor};
  margin-left: ${p => p.sidebarExpanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  color: #fff;
  transition: all .3s;
  box-shadow: 0 2px 5px #ccc;
`;