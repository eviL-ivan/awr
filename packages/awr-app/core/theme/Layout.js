import React, { Component } from "react";
import Header from "theme/Header";
import styled from "styled-components";

const Layout = styled.div`
  font-size: 20px;
`;

export default ({ children }) => {
  return (
    <Layout className="themed">
      <Header />
      {children}
    </Layout>
  );
};
