import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import moment from 'moment';

const styles = {
    root: {
        backgroundColor: "#ccc",
        padding: "3rem 1rem",
    },
    title: {
      fontWeight: "bold"
    }
};

const ArticleDisplay = (props) => {
    const { article } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (article === undefined) {
            navigate("/*")
        }
    },[article,navigate])

    return (
        <Grid sx={styles.root}>
            <Typography variant="h6" sx={styles.title}>{ article?.title }</Typography>
            <Typography variant="caption">{ article?.writer} - { moment(article?.createdAt).format("MMMM Do YYYY") }</Typography>
            <Typography variant="subtitle2">{ article?.subtitle }</Typography>
            <ReactMarkdown children={article?.content} remarkPlugins={[remarkGfm]} />
        </Grid>
    )
}

export default ArticleDisplay