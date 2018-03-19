import React from "react";
import styled, { keyframes } from "styled-components";
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
      changeAllDirection,
      expanded
    } = this.props;
    const { menuOpened } = this.state;

    return (
      <header className={className}>
        <HeaderLeft>
          <BurgerContainer>
            <IconButton onClick={toggleSidebar}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </BurgerContainer>
          <Logo>
            <img src="https://static.tildacdn.com/tild3564-6635-4561-b364-303265376561/__.png" />
          </Logo>
        </HeaderLeft>
        <HeaderRight>
          <SelectContainer
            classes={{ root: "customSelect", select: "customSelect_active" }}
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
  flex-shrink: 0;

  box-sizing: border-box;

  height: ${p => p.theme.header.height};

  background: ${p => p.theme.palette.mainColor};
  color: #014a8e;

  box-shadow: 0 5px 10px #686868;
  z-index: 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-left: 20px;
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

  padding: 0 10px;
  color: white !important;
  display: flex;
  align-items: center;

  &div: (: first-child) {
    background: ${p => p.theme.palette.subMainBlue} !important;
  }

  & .customSelect_active {
    padding-right: 30px;
    padding-bottom: 0;
    padding-top: 0;
    height: 60px;
    display: flex;
    align-items: center;
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

const opacityOpen = keyframes`
  from {
    width:0;
    opacity: 0;
  }
  80% {
    width:0;
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;
const opacityClose = keyframes`
  from {
    opacity: 1;
  }
  20% {
    width:0;
    opacity: 0
  }
  to {
    width:0;
    opacity: 0;
  }
`;

const BtnAddDoc = styled.button`
  z-index: 100;
  position: absolute;
  right: -25px;
  bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  width: ${p => (p.expanded ? "50px" : "170px")};
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${p => p.theme.palette.addDoc};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.4s;
`;

const AddDocText = styled.span`
  font-size: 15px;
`;
/* animation: ${p =>
    !p.expanded
      ? `${opacityOpen} 0.5s linear forwards`
      : `${opacityClose} 0.5s linear forwards`}; */

const BurgerContainer = styled.div`
  width: ${p => p.theme.sidebarExpanded.width} !important;
  padding: 5px;
  position: relative;
  background: #1258a8;
  height: 60px;
  & svg {
    width: 1.3em !important;
    height: 1.3em !important;
  }
`;
