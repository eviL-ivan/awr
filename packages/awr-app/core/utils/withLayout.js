import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import withAppWrapper from "utils/withAppWrapper";

export default InnerComponent => {
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
};
