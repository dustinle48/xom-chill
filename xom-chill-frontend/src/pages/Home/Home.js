import React, { useState } from 'react';

import { Grid, TextField } from '@mui/material';

import { ArticleList } from '../../components/Article';

const styles = {
  root: {
    justifyContent: "center",
  }
};

const Home = (props) => {
  const { articles } = props;
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => article.title.indexOf(search) > -1);

  return (
    <Grid container spacing={0} sx={styles.root}>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <TextField onChange={(event) => setSearch(event.target.value)} placeholder="Search..."/>
        <ArticleList articles={filteredArticles} />
      </Grid>
    </Grid>
  )
}

export default Home