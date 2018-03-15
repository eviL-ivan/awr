import React from "react";
import Link from "next/link";
import { Collapse } from 'material-ui/transitions';
import Tooltip from "material-ui/Tooltip";
import List from 'material-ui/List';
// Иконки
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
// Константы
import { SIDEBAR_MENU } from "../ConstantsTemp";
// Стайлд
import { MenuItemIcon, MenuItemText, MenuItem, SubMenuWrapper, MenuItemWrapper } from "./Styled/Menu";

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