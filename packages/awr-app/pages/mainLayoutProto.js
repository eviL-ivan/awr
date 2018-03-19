import React, { Component } from "react";
import MainLayoutProto from "components/MainLayoutProto";
import Layout from "components/MainLayoutProto/DifferentLayout/Layout";
import withAppWrapper from "components/MainLayoutProto/DifferentLayout/withAppWrapper";

function decorator(InnerComponent) {
  @withAppWrapper
  class LayoutHoc extends Component {
    render() {
      return (
        <Layout>
          <InnerComponent {...this.props} />
        </Layout>
      );
    }
  }

  return LayoutHoc;
}

class mainLayoutProto extends Component {
  render() {
    return <MainLayoutProto {...this.props} />;
  }
}

export default decorator(mainLayoutProto);
