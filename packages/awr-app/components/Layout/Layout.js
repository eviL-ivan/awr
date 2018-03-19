import React from 'react';
import Header from './Header/Header';

import Content from './Content';
import Sidebar from './Sidebar/Sidebar';

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
      <Header
        key="Header"
        sidebarExpanded={expanded}
        toggleSidebar={this.toggleSidebar}
      />,
      <Sidebar
        key="Sidebar"
        expanded={expanded}
        url={this.props.children.props.url}
      />,
      <Content key="Content" sidebarExpanded={expanded}>
        {this.props.children}
      </Content>
    ];
  }
}

export default Layout;
