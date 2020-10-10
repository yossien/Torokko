import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";
import {makeStyles} from "@material-ui/core/styles";
import {Fab, useScrollTrigger, Zoom} from "@material-ui/core";
import {KeyboardArrowUp} from "@material-ui/icons";

interface Props {
  window?: () => Window
  children: React.ReactElement
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

  return (
    <>
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

export default Layout