import React from "react";
import styled from "styled-components";
import IconButton from 'material-ui/IconButton';
// Компоненты
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

class Header extends React.Component {
  render() {
    const { className, sidebarExpanded, toggleSidebar } = this.props;

    return (
      <header className={className}>
        <HeaderLeft
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
        <HeaderRight

        />
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