import React from "react";
import Page from "components/Layout/Page";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";

import Link from "next/link";
import Button from "material-ui/Button";

const Main = styled.div`
  width: 30%;
  margin: 100 auto;
`;

@withLayout
@withStoreProvider
export default class Counter extends React.Component {
  render() {
    return (
      <Main>
        <Link href={{ pathname: "/report", query: { id: 1 } }}>
          <Button>Отчет</Button>
        </Link>
      </Main>
    );
  }
}
