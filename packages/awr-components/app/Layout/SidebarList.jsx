import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import { Link } from 'react-router-dom';

import styled from 'styled-components';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

class SidebarList extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleClick = () => this.setState({ open: !this.state.open });

  render() {
    const { list } = this.props;
    return [
      <ListItem
        button
        onClick={this.handleClick}
        key={`SidebarList-${list.key}`}
      >
        <ListItemText primary={list.name} />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse
        in={this.state.open}
        timeout="auto"
        unmountOnExit
        key={`Collapse-${list.key}`}
      >
        <List component="div" disablePadding>
          {
            list.components.map(component => (
              <StyledLink to={component.path} key={`Link-${list.key}`}>
                <ListItem button>
                  <ListItemText inset primary={component.name} />
                </ListItem>
              </StyledLink>
            ))
          }
        </List>
      </Collapse>,
    ];
  }
}

SidebarList.propTypes = {};

export default SidebarList;
