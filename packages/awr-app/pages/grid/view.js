import React from "react";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";
import DocumentView from "components/Grid/DocumentView/DocumentView";

@withLayout
export default class Index extends React.Component {
  render() {
    return (
      <DocumentView />
    );
  }
}
