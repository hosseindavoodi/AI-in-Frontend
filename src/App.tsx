import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import ProductDetailsPage from "./Components/ProductDetailsPage";
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default App;
