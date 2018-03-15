import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Collapse } from 'material-ui/transitions';
import Tooltip from "material-ui/Tooltip";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

// Иконки
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import { SIDEBAR_MENU } from "../ConstantsTemp";

const MenuItemIcon = styled(ListItemIcon)`
  margin-left: 2px !important;
`;

const MenuItemText = styled(ListItemText)`
  white-space: nowrap !important;
  padding: 0 !important;
  opacity: ${p => p.expanded ? "0": "1"} !important;
  transform: scaleX(${p => p.expanded ? "0": "1"}) !important;
  transition: all .1s !important;
`;

const MenuItem = styled(ListItem)`
  display: flex !important;
  align-items: center !important;
  padding: 10px 20px !important;
  padding-left: ${p => p.dense && !p.expanded ? "36px" : "20px"} !important;
  box-sizing: border-box !important;
  height: ${p => !p.dense && "50px"} !important;
  cursor: pointer !important;
  word-wrap: nowrap !important;
  color: ${p => p.theme.palette.mainColor} !important;

  svg {
    color: ${p => p.theme.palette.darkTextColor} !important;
  }

  ${MenuItemIcon} {
    margin-right: ${p => p.dense ? "10px" : "20px"} !important;
  }
  
  // Выделить пункт меню, если он является текущей ссылкой
  background: ${
    p => p.current
      ? p.dense
        ? p.theme.sidebar.background
        : p.theme.palette.mainColor
      : p.dense
        ? p.theme.sidebar.menu.background
        : p.theme.sidebar.background
  } !important;
  ${MenuItemText} h3, ${MenuItemIcon}, svg {
    color: ${p => p.current ? (p.dense ? p.theme.palette.mainColor : "#fff") : p.theme.palette.darkTextColor} !important;
  }

  &:hover {
    background: ${p => p.dense ? "#fff" : p.theme.palette.mainColor} !important;

    ${MenuItemText} h3, ${MenuItemIcon}, svg {
      color: ${p => p.dense ? p.theme.palette.mainColor : "#fff"}!important;
    }
  }
`;

const SubMenuWrapper = styled.div`
  z-index: 11;
  background: ${p => p.expanded ? p.theme.sidebarExpanded.menu.background : p.theme.sidebar.menu.background};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && "none"};
  position: ${p => p.expanded && "absolute"};
  top: ${p => p.expanded && "0"};
  left: ${p => p.expanded && "100%"};
  box-shadow: ${p => p.expanded && "2px 2px 5px #ccc"}
  
  ${MenuItem} {
  background: red !important;
    box-shadow: inset 0 4px 7px red;
  }
`;

const MenuItemWrapper = styled.div`
  position: relative;
  border-left: ${p => p.active && !p.expanded && `5px solid ${p.theme.palette.mainColor}`};

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && "block"};
  }
`;

class Menu extends React.Component {
  state = {
    current: "", // развернутый пункт меню, содержит key из константы
  };

  componentDidMount() {
    const { url: { pathname } } = this.props;

    // текущий пункт меню (судя по url) делаем развернутый
    SIDEBAR_MENU.forEach(item => {
      if(pathname === item.link || item.children && item.children.some(child => child.link === pathname)) {
        this.setState({
          current: item.key
        })
      }
    });
  }

  setCurrentMenuItem = key => () => {
    this.setState(state => ({
      current: state.current === key ? "" : key
    }));
  };

  renderMenuItem = (item) => {
    const { current } = this.state;
    const { expanded, url: { pathname } } = this.props;

    return (
      <MenuItem
        current={pathname === item.link || item.children && item.children.some(child => child.link === pathname)}
        active={current === item.key}
        button
        onClick={this.setCurrentMenuItem(item.key)}
      >
        {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
        <MenuItemText expanded={expanded} primary={item.title}/>
        {!expanded && item.children && (current === item.key ? <ExpandLess/> : <ExpandMore/>)}
      </MenuItem>
    );
  };

  renderSubMenu = (menu) => {
    const { expanded, url: { pathname } } = this.props;

    return (
      <List disablePadding>
        {
          menu.map(item => (
            <Link href={item.link}>
              <MenuItem
                button
                dense
                current={item.link === pathname}
                expanded={expanded}
              >
                {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
                <MenuItemText inset primary={item.title}/>
              </MenuItem>
            </Link>
          ))
        }
      </List>
    );
  };

  render() {
    const { expanded } = this.props;
    const { current } = this.state;

    return (
      [
        SIDEBAR_MENU.map(item => (
          <MenuItemWrapper expanded={expanded} active={current === item.key}>
            {
              item.link
                ? <Link href={item.link}>{this.renderMenuItem(item)}</Link>
                : this.renderMenuItem(item)
            }
            {
              item.children &&
                <SubMenuWrapper expanded={expanded}>
                  {
                    !expanded
                      ? <Collapse in={!expanded ? (current === item.key) : true}>{this.renderSubMenu(item.children)}</Collapse>
                      : this.renderSubMenu(item.children)
                  }
                </SubMenuWrapper>
            }
          </MenuItemWrapper>
        ))
      ]
    );
  }
}

export default Menu;