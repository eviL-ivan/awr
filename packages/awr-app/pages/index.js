import React from "react";
import withLayout from "utils/withLayout";
import withStoreProvider from "utils/withStoreProvider";
import styled from "styled-components";

import Link from "next/link";

const Wrapper = styled.div`
  > img {
    max-width: 100%;
  }
`;

@withLayout
export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        {/*<Link href={{ pathname: "/report", query: { id: 1 } }}>*/}
          {/*<Button>Отчет</Button>*/}
        {/*</Link>*/}
        <img src="https://pp.userapi.com/c841524/v841524920/73e63/A-dYOUH0RU0.jpg" />
        <img src="https://psv4.userapi.com/c834600/u93145868/docs/d3/237bb59e985e/data_ingest_draft_01.png"/>
      </Wrapper>
    );
  }
}
