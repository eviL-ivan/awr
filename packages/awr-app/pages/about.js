import React from "react";
import Page from "components/Layout/Page";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from 'styled-components';

const Main = styled.div`
    width:30%;
    margin: 100 auto;
`;

@withLayout
@withStoreProvider
export default class Counter extends React.Component {
  render() {
    return <Main>About styled</Main>;
  }
}
