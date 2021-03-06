import React from "react";
import Head from "next/head";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const linkStyle = {
  margin: "0 10px 0 0"
};

export default () => (
  <div style={{ marginBottom: 20 }}>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>

    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/login">
      <a style={linkStyle}>Login</a>
    </Link>
    <Link href="/mainLayoutProto">
      <a style={linkStyle}>mainLayoutProto</a>
    </Link>
  </div>
);
