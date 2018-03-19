import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider } from "material-ui/styles";
import themes from "core/theme/theme";
import muiTheme from "core/theme/muiTheme";

import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "material-ui/styles";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = "jss-insertion-point";

const customTheme = {
  palette: {
    mainColor: "#1565C0",
    secondColor: "#6ba6da",
    textColor: "#555",
    addDoc: "#43A047"
  },
  sign: {
    logo: {
      height: "100px"
    }
  },
  header: {
    height: "60px"
  },
  sidebar: {
    width: "280px"
  },
  sidebarExpanded: {
    width: "56px"
  },
  directionColor: {
    fns: "#1565C0",
    pfr: "#D50000",
    rosstat: "#FF6F00",
    fss: "#FBB901",
    rar: "#2196F3",
    rpn: "#9E9E9E"
  }
};

injectGlobal`
  body {
    font-family: "Roboto";
  } 
   @font-face {
     font-family: "Medium";
     src: url("static/fonts/Roboto-Medium.ttf") ;
   }
      @font-face {
     font-family: "Roboto";
     src: url("static/fonts/Roboto-Regular.ttf") ;
   }
   @font-face {
     font-family: "Bold";
     font-weight:700,
     src: url("static/fonts/Roboto-Bold.ttf") ;
   }
      @font-face {
     font-family: "Roboto";
     font-weight:100,
     src: url("static/fonts/Roboto-Thin.ttf") ;
   }  
`;

const Wrapper = ({ children }) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={Object.assign(themes, customTheme)}>
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
