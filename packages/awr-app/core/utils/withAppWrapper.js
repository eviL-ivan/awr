import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Reboot } from "material-ui";
import { MuiThemeProvider } from 'material-ui/styles';
import theme from "core/theme/theme";
import muiTheme from "core/theme/muiTheme";

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
  }
`;

const Wrapper = ({ children }) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <Reboot>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </MuiThemeProvider>
      </Reboot>
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