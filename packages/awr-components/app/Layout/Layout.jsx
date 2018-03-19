import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import routerConfig from '../../src/routerConfig';

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Header onDrawerToggle={this.handleDrawerToggle} />
        <Sidebar
          theme={theme}
          onDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={() => <h1>AWR Components</h1>} />
            {routerConfig.map(route =>
              route.components.map(component => (
                <Route path={component.path} component={component.component} />
              ))
            )}
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
