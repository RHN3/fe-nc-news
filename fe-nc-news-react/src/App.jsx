import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Articles" element={<Articles />}></Route>
      </Routes>
    </>
  );
}

export default App;
