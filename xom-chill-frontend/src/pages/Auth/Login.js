import React from 'react';

import { Grid } from '@mui/material';
import { LoginForm } from '../../components/Form';

const styles = {
  root: {
    justifyContent: "center",
  },
  wrapper: {
    marginTop: "5rem",
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
};

const Login = (props) => {
  const { login } = props;

  return (
    <Grid container spacing={0} sx={styles.root}>
      <Grid item sx={styles.wrapper} lg={4} md={6} sm={12} xs={12}>
        <LoginForm login={login} />
      </Grid>
    </Grid>
  )
}

export default Login