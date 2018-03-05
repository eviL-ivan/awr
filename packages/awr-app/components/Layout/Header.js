import React from "react";
import styled from "styled-components";
import { Avatar, IconButton, Paper, Badge } from 'material-ui';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { Manager, Target, Popper } from 'react-popper';
import Grow from 'material-ui/transitions/Grow';

import MenuIcon from "material-ui-icons/Menu";
import PersonIcon from 'material-ui-icons/Person';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExitIcon from 'material-ui-icons/ExitToApp';
import SettingsIcon from 'material-ui-icons/Settings';
import LinkIcon from 'material-ui-icons/BookmarkBorder';
import NotificationsIcon from 'material-ui-icons/Notifications';

const Logo = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
  }
`;

const TopProfile = styled(ListItem)`
  position: relative;
  display: flex;
  align-items: center;
  height: ${p => p.theme.header.height};
`;

const CustomBadge = styled(Badge)`
  span {
    background: #ff4c4c;
    border: ${p => `2px solid ${p.theme.palette.mainColor}`};
    color: #fff;
  }
`;

const ProfileMenuItem = styled(MenuItem)`
  color: ${p => p.theme.palette.mainColor};
`;

const ProfileMenu = styled(Paper)`
  svg {
    color: ${p => p.theme.palette.textColor};
  }

  ${ProfileMenuItem}:hover {
    background: #fff;

    svg, h3 {
      color: ${p => p.theme.palette.mainColor};
    }
  }
`;

const CustomAvatar = styled(Avatar)`
  background: #fff;

  svg {
    color: ${p => p.theme.palette.mainColor};
  }
`;

const UserName = styled.span`
  margin-right: 10px;
  color: #fff;
`;

class Header extends React.Component {
  state = {
    menuOpened: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuOpened: !state.menuOpened
    }))
  };

  handleMenuClose = () => {
    if (!this.state.menuOpened) {
      return;
    }

    // setTimeout to ensure a close event comes after a target click event
    this.timeout = setTimeout(() => {
      this.setState({ menuOpened: false });
    });
  };

  render() {
    const { className, toggleSidebar } = this.props;
    const { menuOpened } = this.state;

    return (
      <header className={className}>
        <HeaderLeft>
          <IconButton onClick={toggleSidebar}>
            <MenuIcon style={{color: "#fff"}} />
          </IconButton>
          <Logo>
            <img src="https://psv4.userapi.com/c834501/u93145868/docs/d12/9724c42c6f3c/logo.png" />
          </Logo>
        </HeaderLeft>
        <HeaderRight>
          <IconButton>
            <CustomBadge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </CustomBadge>
          </IconButton>
          <Manager>
            <Target>
              <TopProfile button onClick={this.toggleMenu}>
                <UserName>Вася Пупкин</UserName>
                <CustomAvatar>
                  <PersonIcon />
                </CustomAvatar>
                <ExpandMore />
              </TopProfile>
            </Target>
            <Popper
              placement="bottom-end"
              eventsEnabled={menuOpened}
            >
              <ClickAwayListener onClickAway={this.handleMenuClose}>
                <Grow in={menuOpened}>
                  <ProfileMenu>
                    <MenuList dense>
                      <ProfileMenuItem divider>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Профиль" />
                      </ProfileMenuItem>
                      <ProfileMenuItem>
                        <ListItemIcon>
                          <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Настройки" />
                      </ProfileMenuItem>
                      <ProfileMenuItem>
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Ссылка" />
                      </ProfileMenuItem>
                      <ProfileMenuItem divider>
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Ссылка" />
                      </ProfileMenuItem>
                      <ProfileMenuItem>
                        <ListItemIcon>
                          <ExitIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Выход" />
                      </ProfileMenuItem>
                    </MenuList>
                  </ProfileMenu>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </HeaderRight>
      </header>
    )
  }
}

export default styled(Header)`
  position: fixed;
  z-index: 2;
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
  color: #fff;
`;