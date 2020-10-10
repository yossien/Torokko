import React, {useState} from "react";
import Link from "next/link";
import {firebaseClient} from "../utils/auth/initFirebase";
import {Box, Button, Container, CssBaseline, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {LockOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = (_props: any) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [message, setMessage] = useState('')

  const classes = useStyles()

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1">
          Log in.
        </Typography>
      </div>
        <Link href={"/"}>
          Home.
        </Link>
      <form className={classes.form} noValidate>
        <TextField
          id="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          label="Email Address"
          margin="normal"
          value={email}
          variant="outlined"
          required
          fullWidth
          autoComplete="email"
          autoFocus
        />
        <TextField
          id="password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value)
          }}
          label="password"
          margin="normal"
          value={pass}
          variant="outlined"
          required
          fullWidth
          autoComplete="current-password"
        />
        <Button
          onClick={async () => {
            firebaseClient.auth()
              .signInWithEmailAndPassword(email, pass)
              .then(() => {
                window.location.href = '/'
              })
              .catch((e) => {
                setMessage(e.message)
              })
          }}
          className={classes.submit}
          variant="contained"
          fullWidth
          color="primary">
          Log in.
        </Button>
        <Button
          onClick={async () => {
            firebaseClient.auth()
              .createUserWithEmailAndPassword(email, pass)
              .then(() => {
                window.location.href = '/'
              })
              .catch((e) => {
                setMessage(e.message)
              })
          }}
          className={classes.submit}
          variant="outlined"
          fullWidth
          color="secondary"
        >
          create Account
        </Button>
      </form>
      <Box>
        message: {message}
      </Box>
    </Container>
  )

}

export default Login