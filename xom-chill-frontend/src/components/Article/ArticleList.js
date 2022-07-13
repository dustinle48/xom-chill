import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { ArticleListItem } from "./index";

const styles = {
    box: {
        marginTop: "2rem",
        marginBottom: "2rem",
    }
};

const ArticleList = (props) => {
    const { articles } = props;
    
    return (
        <Grid>
            { articles.length > 0 ? (
                articles.map((article,index) => (
                    <Box key={index} sx={styles.box}>
                        <ArticleListItem article={article} />
                    </Box>
                ))
            ) : (
                <Typography>No article</Typography>
            )}
        </Grid>
    )
}

export default ArticleList