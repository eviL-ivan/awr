import React from "react";
import styled, { keyframes } from "styled-components";
import { Button as MuiButton, IconButton } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { Zoom, Collapse } from "material-ui/transitions";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import AddCircleIcon from "material-ui-icons/NoteAdd";
import PlusIcon from "material-ui-icons/Add";
import MenuIcon from "material-ui-icons/Menu";

import { SIDEBAR_MENU } from "./Constants";

class Sidebar extends React.Component {
  state = {
    current: "" // развернутый пункт меню, содержит key из константы
  };

  setCurrentMenuItem = key => () => {
    this.setState(state => ({
      current: state.current === key ? "" : key
    }));
  };

  render() {
    const { className, expanded, toggleSidebar } = this.props;
    const { current } = this.state;

    return (
      <aside className={className}>
        <BurgerContainer>
          <IconButton onClick={toggleSidebar}>
            <MenuIcon
              style={{
                color: "#fff"
              }}
            />
          </IconButton>
          <BtnAddDoc expanded={expanded}>
            <AddDocText
              style={{
                fontSize: "20px"
              }}
              expanded={!expanded}
            >
              +
            </AddDocText>
            <AddDocText expanded={expanded}>Cоздать документы</AddDocText>
          </BtnAddDoc>
        </BurgerContainer>

        {
          // <CreateDocument expanded={expanded}>
          //         {
          //           // expanded &&
          //           //   <Zoom
          //           //     in
          //           //   >
          //           //     <Button
          //           //       color="primary"
          //           //       variant="fab"
          //           //     >
          //           //       <PlusIcon />
          //           //     </Button>
          //           // </Zoom>
          //         }
          //         {
          //           // !expanded &&
          //           //   <Zoom in>
          //           //     <Button
          //           //       color="primary"
          //           //       variant="raised"
          //           //       fullWidth
          //           //     >
          //           //       <AddDocumentIcon />
          //           //       Создать документ
          //           //     </Button>
          //           // </Zoom>
          //         }
          //       </CreateDocument>
        }

        {SIDEBAR_MENU.map(item => (
          <MenuItemWrapper
            key={item.key}
            expanded={expanded}
            active={current === item.key}
          >
            <MenuItem
              className={current === item.key ? "active" : ""}
              active={current === item.key}
              button
              onClick={this.setCurrentMenuItem(item.key)}
            >
              {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
              <MenuItemText expanded={expanded} primary={item.title} />
              {!expanded &&
                item.children &&
                (current === item.key ? <ExpandLess /> : <ExpandMore />)}
            </MenuItem>
            {item.children && (
              <SubMenuWrapper expanded={expanded}>
                {!expanded ? (
                  <Collapse in={!expanded ? current === item.key : true}>
                    <List disablePadding>
                      {item.children.map(child => (
                        <MenuItem button dense expanded={expanded}>
                          {child.icon && (
                            <MenuItemIcon>{child.icon}</MenuItemIcon>
                          )}
                          <MenuItemText inset primary={child.title} />
                        </MenuItem>
                      ))}
                    </List>
                  </Collapse>
                ) : (
                  <List disablePadding>
                    {item.children.map(child => (
                      <MenuItem button dense expanded={expanded}>
                        {child.icon && (
                          <MenuItemIcon>{child.icon}</MenuItemIcon>
                        )}
                        <MenuItemText inset primary={child.title} />
                      </MenuItem>
                    ))}
                  </List>
                )}
              </SubMenuWrapper>
            )}
          </MenuItemWrapper>
        ))}
      </aside>
    );
  }
}

export default styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.palette.mainColor};
  box-shadow: 0 5px 10px #ccc;
  width: ${p =>
    p.expanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  transition: all 0.3s;
`;

const opacityOpen = keyframes`
  from {
     width:0;
    opacity: 0;
  }


  80% {
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

const BurgerContainer = styled.div`
  position: relative;
  //background: #0163aa;
  background: ${p => p.theme.palette.subMainBlue};
  //background: #014a8e;

  height: ${p => p.theme.topBlock.height};
  margin-bottom: 20px;
  padding: 7px 10px;
`;
const AddDocText = styled.span`
  font-size: 13px;

  animation: ${p =>
    !p.expanded
      ? `${opacityOpen} 0.5s linear forwards`
      : `${opacityClose} 0.5s linear forwards`};
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
  font-weight: bold;
  width: ${p => (p.expanded ? "50px" : "170px")};
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${p => p.theme.palette.addDoc};
  //box-shadow: 3px 2px 5px 1px black;
  transition: all 0.4s;
`;

const SubMenuWrapper = styled.div`
  z-index: 100;
  background: ${p => p.theme.palette.subMenu};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && "none"};
  position: ${p => p.expanded && "absolute"};
  top: ${p => p.expanded && "10px"};
  left: ${p => p.expanded && "100%"};
  box-shadow: ${p => p.expanded && "2px 2px 5px #ccc"};
`;

const MenuItemWrapper = styled.div`
  position: relative;

  &${p => !p.active}:after {
    display: block;
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 5px;
    //height:100%;
    //background:#0163aa;
    background: #0772c0;
  }

  &${p => !p.active} {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && "block"};
  }
  &:hover:after {
    display: block;
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 5px;
    height: 100%;
    //background:#0163aa;
    background: #0772c0;
  }
`;

const MenuItemIcon = styled(ListItemIcon)`
  margin-left: 2px;
  color: ${p => p.expaned && "red"};
`;

const MenuItemText = styled(ListItemText)`
  white-space: nowrap;
  padding: 0;
  opacity: ${p => (p.expanded ? "0" : "1")};
  transform: scaleX(${p => (p.expanded ? "0" : "1")});
  transition: all 0.1s;
`;

const MenuItem = styled(ListItem)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  padding-left: ${p => (p.dense && !p.expanded ? "36px" : "20px")};
  box-sizing: border-box;
  height: ${p => !p.dense && "50px"};
  cursor: pointer;
  word-wrap: nowrap;
  box-sizing: border-box;
  color: ${p => p.theme.palette.mainColor};

  svg {
    color: ${p =>
      p.active ? p.theme.palette.mainColor : p.theme.palette.textColor};
  }

  ${MenuItemText} h3, ${MenuItemIcon} {
    color: ${p => "white"};
    //     p.active ? p.theme.palette.mainColor : //p.theme.palette.textColor
  }

  ${MenuItemIcon} {
    margin-right: ${p => (p.dense ? "10px" : "20px")};
  }
`;

const CreateDocument = styled.div`
  padding: ${p => (p.expanded ? "10px 0" : "20px")};
  text-align: ${p => p.expanded && "center"};
  background: #fff;
`;

const AddDocumentIcon = styled(AddCircleIcon)`
  margin-right: ${p => !p.expanded && "10px"};
`;

const Button = styled(MuiButton)`
  white-space: nowrap;
`;
