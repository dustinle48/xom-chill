import React from 'react';

import { Button, Grid, TextField, Typography } from '@mui/material';

const styles = {
    root: {
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
    }
};

const LoginForm = (props) => {
    const { login } = props;
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const reqBody = {
            email: formElements.email.value,
            password: formElements.password.value,
        };

        await login(reqBody)
    };

    return (
        <Grid sx={styles.root}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <Grid sx={styles.wrapper}>
                <Typography>Login</Typography>
                <TextField name="email" placeholder="Email" />
                <TextField name="password" placeholder="Password" />
                <Button type='submit' variant='contained'>Login</Button>
            </Grid>
            </form>
        </Grid>
    )
}

export default LoginForm