import { useEffect, useState } from "react";
import axios from "axios";

import { ThemeProvider } from "@emotion/react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import jwtDecode from "jwt-decode";

import { Home } from "./pages/Home";
import { Login, Register } from "./pages/Auth";
import { Article, ArticleNew } from "./pages/Article";
import Error404 from "./pages/Error404";

import { Header } from "./components/Header";

import { theme } from "./themes/theme";

//const env = process.env.NODE_ENV !== "production";
axios.defaults.baseURL = /* env ? "http://localhost:5000/" : */ "https://xom-chill-backend.herokuapp.com/";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  const login = async (credentials) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      document.cookie = `c_user=${data.token}; Secure`;
      setUser(jwtDecode(data.token));
      navigate("/");
    } catch (error) {
      console.error(error)
    }
  };

  const logout = async () => {
    try {
      await axios.delete("/auth/logout");
      document.cookie = "c_user=; expires=Thu, 18 Dec 2013 12:00:00 UTC; Secure";
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    const { data } = await axios.get(`/article`);
    setArticles([...data])
  }

  useEffect(() => {
    if (document.cookie) {
      setUser(jwtDecode(document.cookie))
    }

    fetchData();
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header user={user} logout={logout} />
        <Routes>
          <Route path="/" element={ <Home articles={articles} /> } />
          <Route path="/login" element={ <Login login={login} /> } />
          <Route path="/register" element={ <Register /> } />
          {/* <Route path="/about" element={ <About /> } /> */}
          
          <Route path="/article/:id" element={ <Article articles={articles} /> } />

          <Route path="/article/new" element={ <ArticleNew /> } />

          <Route path="*" element={ <Error404 /> } />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
