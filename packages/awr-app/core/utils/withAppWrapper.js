import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from 'core/theme/theme';
import muiTheme from 'core/theme/muiTheme';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

injectGlobal`
  body {
    font-family: Roboto;
    background: #f7f7f7 ;
  }

   @font-face {
     font-family: "Roboto";
     src: url("static/fonts/Roboto-Regular.ttf") format("ttf");
   }
`;

const Wrapper = ({ children }) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default InnerComponent => {
  return class LayoutHoc extends Component {
    render() {
      return (
        <Wrapper>
          <InnerComponent {...this.props} />
        </Wrapper>
      );
    }
  };
};
