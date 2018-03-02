import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";

export default InnerComponent => {
  return class LayoutHoc extends Component {
    render() {
      return (
        <Layout>
          <InnerComponent {...this.props} />
        </Layout>
      );
    }
  };
};
