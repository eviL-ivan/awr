import React, { Component } from "react";
import MainLayoutProto from "components/MainLayoutProto";
import withLayout from "utils/withLayout";
import styled from "styled-components";
@withLayout
class mainLayoutProto extends Component {
  render() {
    return (
      <Container>
        <MainLayoutProto organization={this.props.organization} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
`;

export default mainLayoutProto;
