import React from "react";
import Head from "next/head";
import {Theme} from "../styles/theme"
import {Container} from "../styles/layout"
import { GlobalStyle } from "../styles/reset";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="i  con" href="/favicon.ico" />
        <meta name="description" content="Night-Club" />
        <meta name="og:title" content=" Night-club" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{"Night-Club"}</title>
      </Head>
      <Container>
        {children}
      </Container>
      </ThemeProvider>
  );
};

export default Layout;