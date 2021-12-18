/* eslint-disable func-names */
// eslint-disable-next-line func-names
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import GlobalStyle from '../styles/globalStyles';
import Layout from '../components/Layout';

const Archive = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Archive;
