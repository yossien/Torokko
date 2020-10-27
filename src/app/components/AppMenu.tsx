import {makeStyles} from "@material-ui/styles";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AppConfig from "../AppConfig";
import React from "react";
import {withTranslation} from "../../../i18n"
import {TFunction} from "next-i18next";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 320,
  }
}))

export const AppMenu = ({t}: {readonly t: TFunction}) => {

  const classes = useStyles()

  const AppMenuList = () => {
    return (
      <div className={classes.root}>
        <List>
          {AppConfig.AppMenuList.map(({name, icon}, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={t(name)}/>
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

export default withTranslation('menu')(AppMenu)