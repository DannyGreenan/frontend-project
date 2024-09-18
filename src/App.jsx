import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";
import PageNotFound from "./components/Errors/PageNotFound";
import TopicNotFound from "./components/Errors/TopicNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:topic" element={<Home />} />
        <Route path="/home/:topic/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
