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
    var childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { organization: organization })
    );
    return (
      <RowContainer>
        <Header
          expanded={expanded}
          changeOrganization={this.changeOrganization}
          organization={organization}
          directions={directions}
          changeDirection={this.changeDirection}
          changeAllDirection={this.changeAllDirection}
          toggleSidebar={this.toggleSidebar}
        />

        <PageWrapper>
          <Sidebar toggleSidebar={this.toggleSidebar} expanded={expanded} />
          <Content>{childrenWithProps}</Content>
        </PageWrapper>
      </RowContainer>
    );
  }
}

export default Layout;

const RowContainer = styled.div`
  position: absolute;
  flex-direction: column;
  flex: 1;
  display: flex;
  height: calc(100% - 60px);
  width: 100%;
  background: #eeeeee80;
  transition: all 0.1s;
`;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const Content = styled.section`
  transition: all;
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
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
  width: ${p => (p.expanded ? "50px" : "170px")};
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${p => p.theme.palette.addDoc};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.4s;
`;
