import {makeStyles} from "@material-ui/styles";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AppConfig from "../AppConfig";
import React from "react";
import {BookOutlined, MailOutlined} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    width: 250,
  }
}))

const getIcon = (name: string) => {
  if (name === 'book') {
    return (
      <BookOutlined/>
    )
  } else {
    return (
      <MailOutlined/>
    )
  }
}

export const AppMenu = () => {

  const classes = useStyles()

  const AppMenuList = () => {
    return (
      <div className={classes.root}>
        <List>
          {AppConfig.AppMenuList.map(({name, icon},index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {getIcon(icon)}
              </ListItemIcon>
              <ListItemText primary={name}/>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

  return (
    <div>
      <AppMenuList/>
    </div>
  )
}

export default AppMenu