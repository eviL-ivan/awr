import React from "react";
import styled from "styled-components";
import { Button as MuiButton, IconButton } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Zoom, Collapse } from 'material-ui/transitions';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import AddDocumentIcon from 'material-ui-icons/NoteAdd';
import PlusIcon from 'material-ui-icons/Add';

import { SIDEBAR_MENU } from "./ConstantsTemp";

const Logo = styled.div`
  height: ${p => p.theme.header.height};
  display: flex;
  z-index: 4;
  justify-content: center;
  align-items: center;
`;

const SubMenuWrapper = styled.div`
  z-index: 11;
  background: ${p => p.expanded ? "#fafafa" : "#fff"};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && "none"};
  position: ${p => p.expanded && "absolute"};
  top: ${p => p.expanded && "0"};
  left: ${p => p.expanded && "100%"};
  box-shadow: ${p => p.expanded && "2px 2px 5px #ccc"}
`;

const MenuItemWrapper = styled.div`
  position: relative;
  border-left: ${p => p.active && !p.expanded && `5px solid ${p.theme.palette.mainColor}`};

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && "block"};
  }
`;

const MenuItemIcon = styled(ListItemIcon)`
  margin-left: 2px;
`;

const MenuItemText = styled(ListItemText)`
  white-space: nowrap;
  padding: 0;
  opacity: ${p => p.expanded ? "0": "1"};
  transform: scaleX(${p => p.expanded ? "0": "1"});
  transition: all .1s;
`;

const MenuItem = styled(ListItem)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  padding-left: ${p => p.dense && !p.expanded ? "36px" : "20px"};
  box-sizing: border-box;
  height: ${p => !p.dense && "50px"};
  cursor: pointer;
  word-wrap: nowrap;
  box-sizing: border-box;
  color: ${p => p.theme.palette.mainColor};

  svg {
    color: ${p => p.active ? p.theme.palette.mainColor : p.theme.palette.textColor};
  }

  ${MenuItemText} h3, ${MenuItemIcon} {
    color: ${p => p.active ? p.theme.palette.mainColor : p.theme.palette.textColor};
  }

  ${MenuItemIcon} {
    margin-right: ${p => p.dense ? "10px" : "20px"};
  }

  &:hover {
    background: #fff;

    svg {
      color: ${p => p.theme.palette.mainColor};
    }
  }

  &:hover ${MenuItemText} h3 {
    color: ${p => p.theme.palette.mainColor};
  }

  &:hover ${MenuItemIcon} {
    color: ${p => p.theme.palette.mainColor};
  }
`;

const CreateDocument = styled.div`
  padding: ${p => p.expanded ? "10px 0" : "20px"};
  text-align: ${p => p.expanded && "center"};
  background: #fff;
  
  svg {
    margin-right: ${p => !p.expanded && "5px"}
  }
`;

const Button = styled(MuiButton)`
  white-space: nowrap;
`;

class Sidebar extends React.Component {
  state = {
    current: "", // развернутый пункт меню, содержит key из константы
  };

  setCurrentMenuItem = key => () => {
    this.setState(state => ({
      current: state.current === key ? "" : key
    }));
  };

  render() {
    const { className, expanded } = this.props;
    const { current }  = this.state;

    return (
      <aside className={className}>
        <Logo>
          {
            expanded
              ? <img src="static/images/logo_small_expanded.png" />
              : <img src="static/images/logo_small.png" />
          }
        </Logo>
        <CreateDocument expanded={expanded}>
          {
            expanded &&
            <Zoom
              in
            >
              <Button
                color="primary"
                variant="fab"
              >
                <AddDocumentIcon />
              </Button>
            </Zoom>
          }
          {
            !expanded &&
            <Zoom in>
              <Button
                color="primary"
                variant="raised"
                fullWidth
              >
                <AddDocumentIcon />
                Создать документ
              </Button>
            </Zoom>
          }
        </CreateDocument>
        {
          SIDEBAR_MENU.map(item => (
            <MenuItemWrapper expanded={expanded} active={current === item.key}>
              <MenuItem
                active={current === item.key}
                button
                onClick={this.setCurrentMenuItem(item.key)}
              >
                {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
                <MenuItemText expanded={expanded} primary={item.title}/>
                {!expanded && item.children && ( current === item.key ? <ExpandLess /> : <ExpandMore /> )}
              </MenuItem>
              {
                item.children &&
                <SubMenuWrapper expanded={expanded}>
                  {
                    !expanded
                      ? (
                        <Collapse in={!expanded ? (current === item.key) : true}>
                          <List disablePadding>
                            {
                              item.children.map(child => (
                                <MenuItem button dense expanded={expanded}>
                                  {child.icon && <MenuItemIcon>{child.icon}</MenuItemIcon>}
                                  <MenuItemText inset primary={child.title} />
                                </MenuItem>
                              ))
                            }
                          </List>
                        </Collapse>
                      ) : (
                        <List disablePadding>
                          {
                            item.children.map(child => (
                              <MenuItem button dense expanded={expanded}>
                                {child.icon && <MenuItemIcon>{child.icon}</MenuItemIcon>}
                                <MenuItemText inset primary={child.title} />
                              </MenuItem>
                            ))
                          }
                        </List>
                      )
                  }
                </SubMenuWrapper>
              }
            </MenuItemWrapper>
          ))
        }
      </aside>
    );
  }
}

export default styled(Sidebar)`
  background: #fafafa;
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: 0 0 3px #ccc;
  width: ${p => p.expanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  height: 100vh;
  transition: all .3s;
`;