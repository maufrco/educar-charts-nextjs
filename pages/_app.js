/*
This is copy paste from the with-material-ui example.
*/
import App from "next/app";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../src/getPageContext";

// Add global styles
import "../style.css";
import "react-multi-carousel/lib/styles.css";

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider theme={this.pageContext.theme}>
            <CssBaseline />
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </>
    );
  }
}

export default MyApp;