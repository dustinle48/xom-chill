import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Avatar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const styles = {
    root: {
      background: "#FAE8D5"
    },
    toolbar: {
        justifyContent: "center",
    },
    grid: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      margin: "0 0.5rem",
    },
    user: {
      fontWeight: "bold",
    }
};

const Header = (props) => {
    const { user, logout } = props;

    const handleLogout = async () => {
        await logout()
    };

    return (
        <AppBar component="nav" position="sticky">
            <Toolbar sx={styles.toolbar}>
                <Grid container item sx={styles.grid} lg={6} md={12} sm={12} xs={12}>
                    <Box marginRight="auto">
                    <Link to="/">
                        <Typography>Xom Chill Blog</Typography>
                    </Link>
                    </Box>
                
                { user !== null ? (
                    <Box sx={styles.box}>
                        <Link to={`/user/${user._id}`}>
                        <Button sx={styles.user}
                            startIcon={<Avatar alt={user.userName} src="/Logo.png" />}
                        >{user.userName}</Button>
                        </Link>
                        <Link to="/article/new">
                        <Button sx={styles.button} variant="contained" color="secondary">New Article</Button>
                        </Link>
                        <Button sx={styles.button} variant="contained" onClick={handleLogout}>Logout</Button>
                    </Box>
                    ) : (
                    <Box sx={styles.box}>
                        <Link to="/login">
                        <Button sx={styles.button} 
                            variant="contained" 
                            color="secondary"
                            startIcon={<PersonIcon />}
                        >
                            Login
                        </Button>
                        </Link>
                        <Link to="/register">
                        <Button sx={styles.button} 
                            variant="contained"
                        >
                            Register
                        </Button>
                        </Link>
                    </Box>
                )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header