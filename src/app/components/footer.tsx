import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppConfig from "../AppConfig";

const styles = makeStyles(() => ({
  root: {
    fontSize: '12px'
  }
}))

const CopyRight = () => {

  const classes = styles()

  return (
    <div className={classes.root}>
      ©︎ {(new Date()).getFullYear()} &nbsp; {AppConfig.CopyRight}
    </div>
  )
}

export const Footer = () => {

  return (
    <footer>
      <hr/>
      <CopyRight/>
    </footer>
  )
}

export default Footer