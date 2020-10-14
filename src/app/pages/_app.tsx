import React from "react";
import {AuthProvider} from "../providers/AuthProvider";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import theme from "../theme";
import App from "next/app";

class MyApp extends App {

  componentDidMount() {

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {

    const {Component, pageProps} = this.props

    return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps}/>
        </ThemeProvider>
      </AuthProvider>
    )
  }
}

export default MyApp
