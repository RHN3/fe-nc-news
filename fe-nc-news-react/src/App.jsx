import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Articles from "./Components/Articles";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Articles" element={<Articles />}></Route>
        <Route path="/Articles/:article_id" element={<ArticlePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
