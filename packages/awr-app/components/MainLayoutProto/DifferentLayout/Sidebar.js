import React from "react";
import styled, { keyframes } from "styled-components";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { Collapse } from "material-ui/transitions";
import Add from "material-ui-icons/Add";
import Button from "material-ui/Button";
import Tooltip from "material-ui/Tooltip";
import { SIDEBAR_MENU } from "../../Layout/ConstantsTemp";

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
        <BtnAddContainer
          className={className}
          id="tooltip-BtnAddDoc"
          title={expanded ? "СОЗДАТЬ ДОКУМЕНТ" : ""}
          placement="left"
          style={{ boxShadow: "none" }}
        >
          <BtnAddDoc expanded={expanded}>
            <Add />
            {!expanded && (
              <AddDocText expanded={expanded}>Cоздать документ</AddDocText>
            )}
          </BtnAddDoc>
        </BtnAddContainer>
        {SIDEBAR_MENU.map(item => (
          <MenuItemWrapper
            key={item.key}
            expanded={expanded}
            active={current === item.key || undefined}
          >
            <MenuItem
              className={current === item.key ? "active" : ""}
              active={current === item.key}
              button
              onClick={this.setCurrentMenuItem(item.key)}
            >
              {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
              <MenuItemText
                expanded={expanded}
                primary={item.title}
                hasChildren={item.children && item.children.length}
              />
            </MenuItem>
            {item.children && (
              <SubMenuWrapper expanded={expanded}>
                {!expanded ? (
                  <Collapse in={!expanded ? current === item.key : true}>
                    <List disablePadding>
                      {item.children.map((child, index) => (
                        <SubMenuItem
                          button
                          dense
                          expanded={expanded}
                          key={index + child.title}
                        >
                          {child.icon && (
                            <MenuItemIcon>{child.icon}</MenuItemIcon>
                          )}
                          <MenuItemText inset primary={child.title} />
                        </SubMenuItem>
                      ))}
                    </List>
                  </Collapse>
                ) : (
                  <List disablePadding>
                    {item.children.map((child, idx) => (
                      <SubMenuItem
                        button
                        dense
                        expanded={expanded}
                        key={idx + child.title}
                      >
                        {child.icon && (
                          <MenuItemIcon>{child.icon}</MenuItemIcon>
                        )}
                        <MenuItemText inset primary={child.title} />
                      </SubMenuItem>
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
  background: #fff;
  box-shadow: 0 5px 10px #686868;
  width: ${p =>
    p.expanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  transition: all 0.3s;
  height: calc(100vh - 60px);
  z-index: 21;
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
  1%{
    opacity: 0
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

const AddDocText = styled.span`
  padding: ${p => (!p.expanded ? "0 16px" : 0)};
  font-size: 15px;

  animation: ${p =>
    !p.expanded
      ? `${opacityOpen} 0.5s linear forwards`
      : `${opacityClose} 0.5s linear forwards`};
`;
const BtnAddContainer = styled(Tooltip)`
  border: 6px solid white;
  height: auto;
`;

const BtnAddDoc = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 6px solid white;
  color: white;
  height: 45px;
  width: 100%;

  border: none;
  background: ${p => p.theme.palette.addDoc};
  transition: all 0.4s;
  padding: 0;
  padding-left: 10px;
  min-width: 0;
  span {
    display: flex;
    justify-content: flex-start;
  }
`;

const SubMenuWrapper = styled.div`
  z-index: 10;
  background: ${p => p.theme.palette.subMenu};
  border-top: ${p => p.expanded && `3px solid ${p.theme.palette.mainColor}`};
  display: ${p => p.expanded && "none"};
  position: ${p => p.expanded && "absolute"};
  top: ${p => p.expanded && "0px"};
  left: ${p => p.expanded && p.theme.sidebarExpanded.width};
  box-shadow: ${p => p.expanded && "2px 2px 5px #ccc"};
  background: #fafafa;
  border-left: ${p => p.expanded && "2px solid #ccc"};
`;

const MenuItemWrapper = styled.div`
  position: relative;
  padding-left: 0;
  &${p => !p.active}:after {
    display: block;

    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 5px;
    background: #0772c0;
  }

  &${p => !p.active} {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover ${SubMenuWrapper} {
    display: ${p => p.expanded && "block"};
  }
`;

const MenuItemIcon = styled(ListItemIcon)`
  margin-right: 0;
`;

const MenuItemText = styled(ListItemText)`
  > h3 {
    font-family: ${p => (p.hasChildren ? "Medium" : "Roboto")};
    font-weight: ${p => (p.hasChildren ? 500 : 100)};
    color: ${p => p.theme.palette.textColor + "!important"};
  }

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
  color: ${p => p.theme.palette.textColor};
 
  ${MenuItemText} h3, ${MenuItemIcon} {
    
    color: ${p => p.theme.palette.textColor + "!important"};
    
  }
  padding-left: 14px ;
`;
const SubMenuItem = MenuItem.extend`
  padding-left: 30px;
  & h3 {
    font-family: "Roboto";
    font-weight: normal;
  }
`;
