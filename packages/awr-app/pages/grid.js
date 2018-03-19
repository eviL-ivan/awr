import React from "react";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";
import Grid from "components/Grid/Grid";

@withLayout
export default class Index extends React.Component {
  render() {
    return <Grid />;
  }
}
