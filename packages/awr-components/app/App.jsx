import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from 'material-ui/CssBaseline';
import styled from 'styled-components';

import Layout from './Layout/Layout';

const App = ({ className }) => (
  <CssBaseline>
    <div className={className}>
      <Layout />
    </div>
  </CssBaseline>
);


App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(App)`
  font-family: Roboto, sans-serif; 
`;
