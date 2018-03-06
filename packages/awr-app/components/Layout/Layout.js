import React, { Component } from "react";
import Header from "../../components/Layout/Header";
import styled from "styled-components";
import withAppWrapper from "utils/withAppWrapper";
import Sidebar from "./Sidebar";

class Layout extends React.Component {
  state = {
    expanded: false,
    organization: "all",
    directions: {}
  };

  // переключатель сайдбара в свернутый/развернутый режим
  toggleSidebar = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  changeOrganization = organization => {
    this.setState({
      organization: organization.target.value
    });
  };

  render() {
    const { expanded, organization, directions } = this.state;

    return (
      <RowContainer>
        <Sidebar toggleSidebar={this.toggleSidebar} expanded={expanded} />
        <PageWrapper>
          <Header
            changeOrganization={this.changeOrganization}
            organization={organization}
            directions={directions}
            changeDirection={this.changeDirection}
            changeAllDirection={this.changeAllDirection}
            toggleSidebar={this.toggleSidebar}
          />
          <Content sidebarExpanded={expanded}>{this.props.children}</Content>
        </PageWrapper>
      </RowContainer>
    );
  }
}

export default Layout;

const RowContainer = styled.div`
  position: absolute;
  flex-direction: row;
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Content = styled.section`
  transition: all 0.3s;
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
`;
