import {withTranslation} from "../../../i18n";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {userAuth} from "../providers/AuthProvider";
import Link from "next/link";
import {Button, Card, CardActionArea, CardContent, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {TFunction} from "next-i18next";
import {MailOutlined} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 320,
  }
}))


const UserPanel = ({t}: { readonly  t: TFunction }) => {

  const classes = useStyles()

  const {user} = userAuth()

  const UserInfo = (user) => {
    return (
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <MailOutlined/>
              </ListItemIcon>
              <ListItemText primary={user.email}/>
            </ListItem>
          </List>
        </CardContent>
        <CardActionArea>
          <Button size="small">{t('logout')}</Button>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <div className={classes.root}>
      {user
        ? <UserInfo {...user}/>
        : <Link href="/login">{t('login')}</Link>
      }
    </div>
  )
}

UserPanel.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(UserPanel)