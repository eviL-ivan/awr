import React, { Component } from "react";
import MainLayoutProto from "components/MainLayoutProto";
import withLayout from "utils/withLayout";
import styled from "styled-components";
@withLayout
class mainLayoutProto extends Component {
  render() {
    return (
      <Container>
        <MainLayoutProto />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export default mainLayoutProto;
