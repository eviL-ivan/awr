import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import { Reboot } from "material-ui";
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

injectGlobal`
  body {
    font-family: "Roboto";
  }
  
  
   @font-face {
     font-family: "Roboto";
     src: url("static/fonts/Roboto-Regular.ttf") ;
   }
`;

// const Wrapper = ({ children }) => {
//   return (
//     <JssProvider jss={jss} generateClassName={generateClassName}>
//       <Reboot>
//         <MuiThemeProvider theme={muiTheme}>
//           <ThemeProvider theme={themes.second}>{children}</ThemeProvider>
//         </MuiThemeProvider>
//       </Reboot>
//     </JssProvider>
//   );
// };

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes.first };
  }

  changeTheme = name => () => this.setState({ theme: themes[name] });
  render() {
    const { theme } = this.state;
    return (
      <div>
        <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 100 }}>
          <button onClick={this.changeTheme("first")}>first</button>
          <button onClick={this.changeTheme("second")}>second</button>
        </div>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Reboot>
            <MuiThemeProvider theme={muiTheme}>
              <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
            </MuiThemeProvider>
          </Reboot>
        </JssProvider>
      </div>
    );
  }
}

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
