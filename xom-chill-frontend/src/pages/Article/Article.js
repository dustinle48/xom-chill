import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { ArticleDisplay } from '../../components/Article';

const styles = {
    root: {
        justifyContent: "center",
    },
    grid: {
        
    }
};

const Article = (props) => {
    const { id } = useParams();
    const { articles } = props;

    const article = articles.find((item) => item._id === id);

    return (
        <Grid container spacing={0} sx={styles.root}>
            <Grid item sx={styles.grid} lg={4} md={6} sm={12} xs={12}>
                <ArticleDisplay article={article} />
            </Grid>
        </Grid>
    )
}

export default Article