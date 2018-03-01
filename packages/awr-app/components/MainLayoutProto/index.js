import React, { Component } from "react";
import { render } from "react-dom";
import Reboot from "material-ui/Reboot";
import styled, { ThemeProvider } from "styled-components";
import { Typography } from "material-ui";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
//import "typeface-roboto";
//import "./style.css";
import { theme } from "./Theme.js";

import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "material-ui/styles";
import Layout from "./Layout";

import Header from "./Header/Header";
import Sidebar from "./Sidebar";
import Content from "./Reports/Content";
import SubHeader from "./SubHeader";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = "jss-insertion-point";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071d4",
      light: "#6ba6da",
      dark: "#3599F0"
    },
    secondary: {
      main: "#6ba6da",
      light: "#0071d4",
      dark: "#6ba6da"
    }
    // error: will us the default color
  }
});

class App extends Component {
  state = {
    expanded: false,
    organization: "all",
    directions: {}
  };

  changeDirection = directionName => {
    const directions = { ...this.state.directions };
    if (directions[directionName]) delete directions[directionName];
    else directions[directionName] = true;

    this.setState({ directions });
  };
  changeAllDirection = directions => () => {
    const directionLength = Object.keys(this.state.directions).length;

    let _directions = {};
    if (directionLength !== 6) {
      _directions = directions.reduce((previousValue, item) => {
        previousValue[item.label] = true;
        return previousValue;
      }, {});
    }
    this.setState({ directions: _directions });
  };

  changeOrganization = organization => {
    this.setState({
      organization: organization.target.value
    });
  };

  toggleSidebar = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const { expanded, organization, directions } = this.state;

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Reboot>
          <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
              <Typography>
                <RowContainer>
                  <Sidebar
                    expanded={expanded}
                    toggleSidebar={this.toggleSidebar}
                  />
                  <Layout>
                    <Header
                      changeOrganization={this.changeOrganization}
                      organization={organization}
                      directions={directions}
                      changeDirection={this.changeDirection}
                      changeAllDirection={this.changeAllDirection}
                      toggleSidebar={this.toggleSidebar}
                    />

                    <Content
                      sidebarExpanded={expanded}
                      organization={organization}
                      directions={directions}
                    />
                  </Layout>
                </RowContainer>
              </Typography>
            </ThemeProvider>
          </MuiThemeProvider>
        </Reboot>
      </JssProvider>
    );
  }
}

const TypographyContainer = styled(Typography)`
  /* flex: 1;
  display: flex;
  height: 100%; */
  /* width: 100%; */
`;

const RowContainer = styled.div`
  flex-direction: row;
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
`;
export default App;
{
  /* <SubHeader
changeOrganization={this.changeOrganization}
organization={organization}
directions={directions}
changeDirection={this.changeDirection}
changeAllDirection={this.changeAllDirection}
/> */
}
