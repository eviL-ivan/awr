import React from "react";
import styled from "styled-components";
import { Avatar, IconButton, Paper, Badge } from 'material-ui';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuList, MenuItem } from 'material-ui/Menu';

// Иконки
import PersonIcon from 'material-ui-icons/Person';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import NotificationsIcon from 'material-ui-icons/Notifications';

import { PROFILE_MENU } from "../ConstantsTemp";

// Компоненты
import ToggleSidebarButton from "./ToggleSidebarButton";

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

const ProfileMenu = styled(Menu)`
  margin-top: calc(${p => p.theme.header.height} - 15px);
  
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
  background: #fff !important;

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