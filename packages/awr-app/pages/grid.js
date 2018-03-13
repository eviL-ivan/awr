import React from "react";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";
import Grid from "components/Grid/Grid";

const Wrapper = styled.div`
`;

@withLayout
export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid />
      </Wrapper>
    );
  }
}
