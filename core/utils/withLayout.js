import React, { Component } from "react";
import Layout from "../theme/Layout";

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
