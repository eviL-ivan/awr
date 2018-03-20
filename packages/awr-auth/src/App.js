import React, { Component } from 'react';
import EntryContainer from "./Auth/EntryContainer";
import styled from "styled-components";
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider, injectGlobal } from 'styled-components';
import NotifyService from "./NotificationService";
import theme from "./Theme/theme";
import muiTheme from "./Theme/muiTheme";
import Snackbar from "./Components/Snackbar";

const BackgroundImg = styled.div`
  content: "";
  background-color: rgba(245, 248, 245, .95);
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("https://static.tildacdn.com/tild3464-6635-4264-a264-636236656538/v_5YAJ_aHY.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Layout = styled.div`
  content: "";
  background-color: rgba(245, 248, 245, .9);
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

injectGlobal`
  body {
    font-family: Roboto;
    background: #f7f7f7 !important;
  }
`;

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <BackgroundImg>
        <Layout>
          <EntryContainer />
        </Layout>
        <Snackbar ref={NotifyService.init} />
      </BackgroundImg>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default App;
