import React from "react";
import Header from "./header";
import {Footer} from "./footer";
import {makeStyles} from "@material-ui/core/styles";
import {Fab, useScrollTrigger, Zoom} from "@material-ui/core";
import {KeyboardArrowUp} from "@material-ui/icons";
import Head from "next/head";
import {TFunction} from "next-i18next";
import {withTranslation} from "../../../i18n"

interface Props {
  window?: () => Window
  children: React.ReactElement
  title: string
  t: TFunction
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}))

function ScrollTop(props: Props) {
  const {children, window} = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({behavior: "smooth", block: "center"})
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

export const Layout = (props: Props) => {

  const {t} = props

  return (
    <>
      <Head>
        <title>{t('app_name')} | {props.title}</title>
        <meta charSet="utf-8"/>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <link rel='preload' as='style' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      </Head>
      <Header />
      <div id="back-to-top-anchor"/>
      {props.children}
      <Footer/>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" area-label="scroll back to top">
          <KeyboardArrowUp/>
        </Fab>
      </ScrollTop>
    </>
  )
}

Layout.getInitialProps = async () => ({
  namespacesRequired: ['header']
})

export default withTranslation('header')(Layout)