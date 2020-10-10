import React from "react";
import {AuthProvider} from "../providers/AuthProvider";

export const App = ({Component, pageProps}) => {
  return (
    <AuthProvider>
      <Component {...pageProps}/>
    </AuthProvider>
  )
}

export default App