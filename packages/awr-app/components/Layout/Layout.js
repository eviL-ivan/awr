import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { IconButton } from "material-ui";
import ArrowLeftIcon from "material-ui-icons/KeyboardArrowLeft";

import Content from "./Content";
import Sidebar from "./Sidebar";

const ToggleSidebarButton = styled.div`
  position: fixed !important;
  z-index: 6;
  top: 0;
  left: ${p => p.expanded ? `calc(${p.theme.sidebarExpanded.width} - 3px)` : `calc(${p.theme.sidebar.width} - 27px)`};
  // TODO: удалить !important, когда заработает JSS
  width: calc(${p => p.theme.header.height} / 2) !important;
  height: ${p => p.theme.header.height} !important;
    
  border-bottom-left-radius: ${p => p.theme.header.height};
  border-top-left-radius: ${p => p.theme.header.height};
  
  background: ${p => !p.expanded ? p.theme.palette.mainColor : p.theme.sidebar.background} !important;
  color: ${p => p.expanded ? p.theme.palette.mainColor : p.theme.sidebar.background} !important;
  box-shadow: none !important;
  
  transform: rotateY(${p => p.expanded ? "180deg" : "0deg"});
  transition: all .3s;
`;

const ExpandButton = styled(IconButton)`
  position: absolute !important;
  top: 6px;
  left: 0;
  color: ${p => p.theme.palette.secondColor} !important;

  svg {
    color: ${p => p.expanded ? p.theme.palette.mainColor : "#fff"};
  }
`;

class Layout extends React.Component {
  state = {
    expanded: false
  };

  // переключатель сайдбара в свернутый/развернутый режим
  toggleSidebar = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  };

  render() {
    const { expanded } = this.state;

    return [
      <ToggleSidebarButton expanded={expanded}>
        <ExpandButton
          expanded={expanded}
          onClick={this.toggleSidebar}
        >
          <ArrowLeftIcon />
        </ExpandButton>
      </ToggleSidebarButton>,
      <Header sidebarExpanded={expanded} />,
      <Sidebar expanded={expanded} />,
      <Content sidebarExpanded={expanded}>
        {this.props.children}
      </Content>
    ];
  };
}

export default Layout;
