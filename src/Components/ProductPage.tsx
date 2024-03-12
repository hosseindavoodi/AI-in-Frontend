// ProductPage.tsx

import React, { useEffect, useState } from "react";
import { useMount } from "./Hooks/useMount";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", category: "Electronics" },
    { id: 2, name: "Product B", category: "Clothing" },
    { id: 3, name: "Product C", category: "a" },
    { id: 4, name: "Product D", category: "b" },
    { id: 5, name: "Product F", category: "c" },
    // Add more products as needed
  ]);

  // useEffect(() => {
  //   // Load click counts from local storage on initial load
  //   // const storedClicks = localStorage.getItem("productClicks");
  //   // if (storedClicks) {
  //   //   const clicksMap = JSON.parse(storedClicks);

  //   //   // Sort products based on clicks in descending order
  //   //   const sortedProducts = [...products].sort(
  //   //     (a, b) => (clicksMap[b.id] || 0) - (clicksMap[a.id] || 0) || a.id - b.id
  //   //   );

  //   //   // setProducts(sortedProducts);
  //   // }

  //   // Schedule a check every 5 minutes to update the sorting
  //   const intervalId = setInterval(() => {
  //     const storedClicks = localStorage.getItem("productClicks");
  //     if (storedClicks) {
  //       const clicksMap = JSON.parse(storedClicks);

  //       // Sort products based on clicks in descending order
  //       const sortedProducts = [...products].sort(
  //         (a, b) =>
  //           (clicksMap[b.id] || 0) - (clicksMap[a.id] || 0) || a.id - b.id
  //       );

  //       setProducts(sortedProducts);
  //     }
  //   }, 5000); // 5 minutes in milliseconds

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [products]);

  useMount(() => {
    const storedClicks = localStorage.getItem("productClicks");
    if (storedClicks) {
      const clicksMap = JSON.parse(storedClicks);

      // Sort products based on clicks in descending order
      const sortedProducts = [...products].sort(
        (a, b) => (clicksMap[b.id] || 0) - (clicksMap[a.id] || 0) || a.id - b.id
      );

      setProducts(sortedProducts);
    }
  });

  const handleProductClick = (productId: number) => {
    // Update click count in local storage
    const clicksMap = JSON.parse(localStorage.getItem("productClicks") || "{}");
    clicksMap[productId] = (clicksMap[productId] || 0) + 1;
    localStorage.setItem("productClicks", JSON.stringify(clicksMap));
    console.log(clicksMap);
  };

  return (
    <div>
      <h1>E-commerce Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product.id)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
