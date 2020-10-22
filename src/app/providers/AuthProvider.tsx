import React, {createContext, useContext, useEffect, useState} from "react";
import {firebaseClient} from "../utils/auth/initFirebase";
import nookies from "nookies"

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
})

export function AuthProvider({children}: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null)

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (_user) => {
      if (!_user) {
        setUser(_user)
        nookies.set(undefined, 'token', '', {})
        return
      }

      const token = await _user.getIdToken()
      setUser(_user)
      nookies.set(undefined, 'token', token, {})
    })
  })

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const userAuth = () => {
  return useContext(AuthContext)
}