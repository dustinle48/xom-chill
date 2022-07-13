import React from 'react';

import { Link } from "react-router-dom";

import { Box, Typography } from '@mui/material';

import moment from 'moment';

const styles = {
  root: {
    border: "1px black solid",
    borderRadius: "5px",
    padding: "5px",
  },
  title: {
    fontWeight: "bold"
  }
};

const ArticleListItem = (props) => {
  const { article } = props;

  return (
    <Box sx={styles.root}>
      <Link to={`/article/${article._id}`}>
        <Typography variant="h6" sx={styles.title}>{ article.title }</Typography>
      </Link>
      <Typography variant="caption">{ article.writer} - { moment(article.createdAt).format("MMMM Do YYYY") }</Typography>
      <Typography variant="subtitle2">{ article.subtitle }</Typography>
    </Box>
  )
}

export default ArticleListItem