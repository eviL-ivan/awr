import React from 'react';
import styled from 'styled-components';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const MenuItemIcon = styled(ListItemIcon)`
  margin-left: 2px;
`;

export const MenuItemText = styled(ListItemText)`
  white-space: nowrap;
  padding: 0;
  opacity: ${p => (p.expanded ? '0' : '1')};
  transform: scaleX(${p => (p.expanded ? '0' : '1')});
  transition: all 0.1s;
`;

export const MenuItem = styled(ListItem)`
  display: flex ;
  align-items: center ;
  padding: 10px 20px ;
  padding-left: ${p => (p.dense && !p.expanded ? '36px' : '20px')} ;
  box-sizing: border-box ;
  height: ${p => !p.dense && '50px'} ;
  cursor: pointer ;
  word-wrap: nowrap ;
  color: ${p => p.theme.palette.mainColor} ;

  svg {
    color: ${p => p.theme.palette.darkTextColor} ;
  }

  ${MenuItemIcon} {
    margin-right: ${p => (p.dense ? '10px' : '20px')} ;
  }
  
  /*Выделить пункт меню, если он является текущей ссылкой*/
  background: ${p =>
    p.current
      ? p.dense ? p.theme.sidebar.background : p.theme.palette.mainColor
      : p.dense
        ? p.theme.sidebar.menu.background
        : p.theme.sidebar.background} ;
  ${MenuItemText} h3, ${MenuItemIcon}, svg {
    color: ${p =>
      p.current
        ? p.dense ? p.theme.palette.mainColor : '#fff'
        : p.theme.palette.darkTextColor} ;
  }

  &:hover {
    background: ${p => (p.dense ? '#fff' : p.theme.palette.mainColor)} ;

    ${MenuItemText} h3, ${MenuItemIcon}, svg {
      color: ${p => (p.dense ? p.theme.palette.mainColor : '#fff')}!important;
    }
  }
`;

export const SubMenuWrapper = styled.div`
  z-index: 11;
  background: ${p =>
    p.expanded
      ? p.theme.sidebarExpanded.menu.background
      : p.theme.sidebar.menu.background};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && 'none'};
  position: ${p => p.expanded && 'absolute'};
  top: ${p => p.expanded && '0'};
  left: ${p => p.expanded && '100%'};
  box-shadow: ${p => p.expanded && '2px 2px 5px #ccc'};
`;

export const MenuItemWrapper = styled.div`
  position: relative;
  border-left: ${p =>
    p.active && !p.expanded && `5px solid ${p.theme.palette.mainColor}`};

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && 'block'};
  }
`;
