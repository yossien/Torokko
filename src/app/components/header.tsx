import React, {useState} from "react";
// import {userAuth} from "../providers/AuthProvider";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Drawer} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircleOutlined, MenuOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import AppConfig from "../AppConfig";
import AppMenu from "./AppMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: '1.4em'
  }
}))

export const Header = () => {

  const [opened, setOpen] = useState<boolean>(false)

  const toggleDrawer = (_opened: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,) => {

    if (event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(_opened)
  }

  // const {user} = userAuth()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
            color="inherit"
            aria-label="menu">
            <MenuOutlined/>
          </IconButton>
          <Typography variant="h1" className={classes.title}>
            {AppConfig.AppName}
          </Typography>
          <IconButton color="inherit" aria-label="user">
            <AccountCircleOutlined/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Drawer anchor="left" open={opened} onClose={toggleDrawer(false)}>
        <AppMenu/>
      </Drawer>
    </div>
  )
}

export default Header