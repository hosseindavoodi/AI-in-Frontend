import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Blogs from "./Pages/Blogs";
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
