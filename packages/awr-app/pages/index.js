import React from "react";
import withLayout from "utils/withLayout";
import withAppWrapper from "utils/withAppWrapper";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";

import Link from "next/link";

const Wrapper = styled.div`
  > img {
    max-width: 100%;
  }
`;

@withAppWrapper
export default class Index extends React.Component {
  render() {
    return <Wrapper>123</Wrapper>;
  }
}
