import React from "react";
import styled from "styled-components";
import { Avatar, IconButton, Paper, Badge } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { MenuList, MenuItem } from "material-ui/Menu";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import { Manager, Target, Popper } from "react-popper";
import Grow from "material-ui/transitions/Grow";
import Popover from "material-ui/Popover";
import MenuIcon from "material-ui-icons/Menu";
import PersonIcon from "material-ui-icons/Person";
import ExpandMore from "material-ui-icons/ExpandMore";
import ExitIcon from "material-ui-icons/ExitToApp";
import SettingsIcon from "material-ui-icons/Settings";
import LinkIcon from "material-ui-icons/BookmarkBorder";
import NotificationsIcon from "material-ui-icons/Notifications";
import Select from "material-ui/Select";
import Input from "material-ui/Input";

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
    }));
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
    const {
      className,
      toggleSidebar,
      changeOrganization,
      changeDirection,
      organization,
      directions,
      changeAllDirection
    } = this.props;
    const { menuOpened } = this.state;

    return (
      <header className={className}>
        <HeaderLeft>
          <Logo>
            <img src="https://static.tildacdn.com/tild3564-6635-4561-b364-303265376561/__.png" />
          </Logo>
        </HeaderLeft>
        <HeaderRight>
          <SelectContainer
            classes={{
              root: "customSelect",
              select: "customSelect_active"
            }}
            value={organization}
            onChange={changeOrganization}
            inputProps={{ name: "organization" }}
            native={false}
            input={<Input name="name" id="name-disabled" />}
          >
            <MenuItem value="all">Все организации</MenuItem>
            <MenuItem value="mitek">OOO 'МИТЕК’ </MenuItem>
            <MenuItem value="sup">OOO 'Суповой набор’ </MenuItem>
            <MenuItem value="gold">OOO 'Золотое Дно’</MenuItem>
          </SelectContainer>
          <IconButton color="white">
            <CustomBadge badgeContent={2}>
              <NotificationsIcon />
            </CustomBadge>
          </IconButton>
          <Manager style={{ marginLeft: "8px" }}>
            <Target>
              <TopProfile button onClick={this.toggleMenu}>
                <UserName>Вася Пупкин</UserName>
                <CustomAvatar>
                  <PersonIcon />
                </CustomAvatar>
                <ExpandMore />
              </TopProfile>
            </Target>
            {menuOpened && (
              <Popper
                style={{ zIndex: 100 }}
                placement="bottom-end"
                eventsEnabled={menuOpened}
              >
                <ClickAwayListener onClickAway={this.handleMenuClose}>
                  <Grow in={menuOpened}>
                    <ProfileMenu style={{ zIndex: 100 }}>
                      <MenuList style={{ zIndex: 100 }} dense>
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
            )}
          </Manager>
        </HeaderRight>
      </header>
    );
  }
}

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-sizing: border-box;
  height: ${p => p.theme.header.height};
  background: ${p => p.theme.palette.mainColor};
  color: #014a8e;
`;

const Logo = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  width: 100px;
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
    color: "white";
    background: #fb8c00;
    border: ${p => `2px solid ${p.theme.palette.mainColor}`};
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

    svg,
    h3 {
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

const SelectContainer = styled(Select)`
  background: none !important;
  border: none;
  height: 60px;
  padding: 0 10px;
  /* width: 200px; */
  color: white !important;
  display: flex;
  align-items: center;
  & div:(:first-child) {
    background: ${p => p.theme.palette.subMainBlue} !important;
  }
  & div {
    background: none !important;
  }

  & * {
    height: 100%;
  }
  &:before,
  &:after {
    background: none !important;
  }
  & svg {
    color: white;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1) !important;
  }
`;
