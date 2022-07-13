import React from 'react'

import { Grid, Typography } from '@mui/material';

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

const Register = () => {
    return (
        <Grid container spacing={0} sx={styles.root}>
            <Grid item sx={styles.wrapper} lg={4} md={6} sm={12} xs={12}>
                <Typography>Register</Typography>
            </Grid>
        </Grid>
    )
}

export default Register