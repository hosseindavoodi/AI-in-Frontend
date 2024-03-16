// ProductPage.tsx

import React, { useEffect, useState } from "react";
import { useMount } from "./Hooks/useMount";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "A", category: "A" },
    { id: 2, name: "B", category: "" },
    { id: 3, name: "C", category: "a" },
    { id: 4, name: "D", category: "b" },
    { id: 5, name: "E", category: "c" },
    { id: 6, name: "F", category: "c" },
    { id: 7, name: "G", category: "c" },
    { id: 8, name: "H", category: "c" },
  ]);

  useMount(() => {
    const storedClicks = localStorage.getItem("productClicks");
    if (storedClicks) {
      const clicksMap = JSON.parse(storedClicks);

      const sortedProducts = [...products].sort(
        (a, b) => (clicksMap[b.id] || 0) - (clicksMap[a.id] || 0) || a.id - b.id
      );

      setProducts(sortedProducts);
    }
  });

  const handleProductClick = (productId: number) => {
    const clicksMap = JSON.parse(localStorage.getItem("productClicks") || "{}");
    clicksMap[productId] = (clicksMap[productId] || 0) + 1;
    localStorage.setItem("productClicks", JSON.stringify(clicksMap));
    window.open(`/product/${productId}`, "_blank");
    console.log(clicksMap);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div
          className="topics"
          key={product.id}
          onClick={() => handleProductClick(product.id)}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
