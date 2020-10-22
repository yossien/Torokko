import React from "react"
import Document, {Html, Main, NextScript} from "next/document"
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";
import Head from "next/head";
import flush from "styled-jsx/server"
import AppConfig from "../AppConfig";
import {i18n} from "../../../i18n"

class CustomDocument extends Document {

  render() {
    return (
      <Html lang={i18n.language}>
        <Head><title>{AppConfig.AppName}</title></Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

/**
 * @param ctx
 */
CustomDocument.getInitialProps = async (ctx) => {

  /*
   * Resolution order
   *
   * On the server:
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. document.getInitialProps
   * 4. app.render
   * 5. page.render
   * 6. document.render
   *
   * On the server with error:
   * 1. document.getInitialProps
   * 2. app.render
   * 3. page.render
   * 4. document.render
   *
   * On the client
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. app.render
   * 4. page.render
   */

  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <>
        {sheets.getStyleElement()}
        {flush() || null}
      </>
    )
  }
}

export default CustomDocument
