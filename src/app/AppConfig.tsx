import {BookOutlined, MailOutlined} from "@material-ui/icons";
import React from "react";

export const AppConfig = {
  AppName: 'Torokko',
  CopyRight: 'yossien',
  AppMenuList: [
    {name: 'Mail', icon: (<MailOutlined/>)},
    {name: 'Book', icon: (<BookOutlined/>)}
  ]
}

export default AppConfig