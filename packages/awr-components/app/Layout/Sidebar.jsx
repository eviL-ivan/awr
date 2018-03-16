import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import List from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';

import SidebarList from './SidebarList';
import styles from './styles';
import sideBarLists from '../../src/routerConfig';

const Sidebar = ({
  classes, theme, mobileOpen, onDrawerToggle,
}) => (
  [
    <Hidden mdUp key="HiddenMdUp">
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={onDrawerToggle}
        classes={{
            paper: classes.drawerPaper,
          }}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {sideBarLists.map(list => (
              <SidebarList list={list} key={list.key} />
              ))}
          </List>
        </div>
      </Drawer>
    </Hidden>,
    <Hidden smDown implementation="css" key="HiddenSmDown">
      <div style={{ width: 240 }}>
        <Drawer
          variant="permanent"
          open
          classes={{
              paper: classes.drawerPaper,
            }}
        >
          <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {sideBarLists.map(list => (
                <SidebarList list={list} key={list.key} />
                ))}
            </List>
          </div>
        </Drawer>
      </div>
    </Hidden>,
  ]
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
