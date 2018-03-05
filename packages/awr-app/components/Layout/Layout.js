import React, { Component } from "react";
import Header from "../../components/Layout/Header";
import styled from "styled-components";
import withAppWrapper from "utils/withAppWrapper";
import Sidebar from "./Sidebar";

@withAppWrapper
class Layout extends React.Component {
  state = {
    expanded: false
  };

  // переключатель сайдбара в свернутый/развернутый режим
  toggleSidebar = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const { expanded } = this.state;

    return [
      <Header toggleSidebar={this.toggleSidebar} />,
      <PageWrapper>
        <Sidebar expanded={expanded} />
        <Content sidebarExpanded={expanded}>{this.props.children}</Content>
      </PageWrapper>
    ];
  }
}

export default Layout;

const PageWrapper = styled.div`
  margin-top: ${p => p.theme.header.height};
`;

const Content = styled.section`
  margin-left: ${p =>
    p.sidebarExpanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  transition: all 0.3s;
  padding: 20px;
`;
