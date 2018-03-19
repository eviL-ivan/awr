import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import getPageContext from 'utils/getPageContext';
import { ServerStyleSheet } from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props;
    return (
      <html lang="en" dir="ltr">
        <Head>
          <head
            dangerouslySetInnerHTML={{ __html: `<!-- jss-insertion-point -->` }}
          />
          <title>Awesome Astral Web Report</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ({ renderPage }) => {
  // styled-ssr
  const sheet = new ServerStyleSheet();
  const styleTags = sheet.getStyleElement();
  // JSS
  const pageContext = getPageContext();

  return {
    ...renderPage(),
    pageContext,
    styleTags,
    styles: <style id="jss-server-side" />
  };
};

export default MyDocument;
