import React from 'react';
import { Grid, Typography } from '@mui/material';

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};

const Error404 = () => {
  return (
    <Grid container sx={styles.root}>
      <Typography variant='h2'>404 NOT FOUND</Typography>
    </Grid>
  )
}

export default Error404