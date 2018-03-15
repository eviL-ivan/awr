import React from "react";
import styled from "styled-components";
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const MenuItemIcon = styled(ListItemIcon)`
  margin-left: 2px !important;
`;

export const MenuItemText = styled(ListItemText)`
  white-space: nowrap !important;
  padding: 0 !important;
  opacity: ${p => p.expanded ? "0": "1"} !important;
  transform: scaleX(${p => p.expanded ? "0": "1"}) !important;
  transition: all .1s !important;
`;

export const MenuItem = styled(ListItem)`
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

export const SubMenuWrapper = styled.div`
  z-index: 11;
  background: ${p => p.expanded ? p.theme.sidebarExpanded.menu.background : p.theme.sidebar.menu.background};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && "none"};
  position: ${p => p.expanded && "absolute"};
  top: ${p => p.expanded && "0"};
  left: ${p => p.expanded && "100%"};
  box-shadow: ${p => p.expanded && "2px 2px 5px #ccc"}
`;

export const MenuItemWrapper = styled.div`
  position: relative;
  border-left: ${p => p.active && !p.expanded && `5px solid ${p.theme.palette.mainColor}`};

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && "block"};
  }
`;