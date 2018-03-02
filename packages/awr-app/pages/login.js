import React from "react";
import withAppWrapper from "utils/withAppWrapper";
import styled from 'styled-components';
import { Typography } from "material-ui";

import EntryContainer from "components/Entry/EntryContainer";

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

@withAppWrapper
class Login extends React.Component {
  render() {
    return (
      <BackgroundImg>
        <Layout>
          <EntryContainer />
        </Layout>
      </BackgroundImg>
    );
  }
}

export default Login;