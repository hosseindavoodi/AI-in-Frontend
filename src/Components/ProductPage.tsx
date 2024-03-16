// ProductPage.tsx

import React, { useEffect, useState } from "react";
import { useMount } from "./Hooks/useMount";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "A", category: "A" },
    { id: 2, name: "Backend Developer", category: "B" },
    { id: 3, name: "English teacher", category: "G" },
    { id: 4, name: "A", category: "A" },
    { id: 5, name: "E", category: "E" },
    { id: 6, name: "D", category: "D" },
    { id: 7, name: "Math teacher", category: "G" },
    { id: 8, name: "Python Programer", category: "B" },
    { id: 9, name: "I", category: "I" },
    { id: 10, name: "C", category: "C" },
    { id: 11, name: "Math teacher", category: "G" },
    { id: 12, name: "F", category: "F" },
    { id: 13, name: "A", category: "A" },
    { id: 14, name: "C", category: "C" },
    { id: 15, name: "C# Programer", category: "B" },
  ]);

  useMount(() => {
    //const storedClicks = localStorage.getItem("productClicks");
    const storedCategoryClicks = localStorage.getItem("categoryClicks");
    if (storedCategoryClicks) {
      //const clicksMap = JSON.parse(storedClicks);
      const categoryClicksMap = JSON.parse(storedCategoryClicks);
      // const sortedProducts = [...products].sort(
      //   (a, b) => (clicksMap[b.id] || 0) - (clicksMap[a.id] || 0) || a.id - b.id
      // );
      const sortedProducts = [...products].sort(
        (a, b) =>
          (categoryClicksMap[b.category] || 0) -
            (categoryClicksMap[a.category] || 0) || a.id - b.id
      );

      setProducts(sortedProducts);
    }
  });

  const handleProductClick = (productId: number, category: string) => {
    const clicksMap = JSON.parse(localStorage.getItem("productClicks") || "{}");
    const CategoryClicksMap = JSON.parse(
      localStorage.getItem("categoryClicks") || "{}"
    );
    clicksMap[productId] = (clicksMap[productId] || 0) + 1;
    CategoryClicksMap[category] = (CategoryClicksMap[category] || 0) + 1;
    localStorage.setItem("productClicks", JSON.stringify(clicksMap));
    localStorage.setItem("categoryClicks", JSON.stringify(CategoryClicksMap));
    window.open(`/product/${productId}`, "_blank");
    console.log(clicksMap);
    console.log(CategoryClicksMap);
  };

  return (
    <>
      <div className="header">
        Menu
        <div className="menuContainer">
          <div style={{ display: "flex" }}>
            <ul className="menu">
              <li> Find job</li>
              <li> Application proccess</li>
              <li> CV designer</li>
              <li> Blog</li>
              <li> Contact us</li>
            </ul>
            <div className="quickMenu">
              Quick Menu
              <ul className="">
                <li> Find job</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {products.map((product) => (
          <div
            className="topics"
            key={product.id}
            onClick={() => handleProductClick(product.id, product.category)}
          >
            {product.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
