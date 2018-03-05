import React from "react";
import Header from "./Header";
import styled from "styled-components";

import Content from "./Content";
import Sidebar from "./Sidebar";

const PageWrapper = styled.div`
  margin-top: ${p => p.theme.header.height}; 
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
        <Header toggleSidebar={this.toggleSidebar} />,
        <PageWrapper>
          <Sidebar expanded={expanded}/>
          <Content sidebarExpanded={expanded}>
            {this.props.children}
          </Content>
        </PageWrapper>
    ];
  };
}

export default Layout;
