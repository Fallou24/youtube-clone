import React, { useState } from "react";
import "./categories.scss";
const Categories = () => {
  const [activeCat, setActiveCat] = useState("All");
  const categories = [
    "All",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
    "lorem ipsum",
    "lorem",
  ];

  return (
 
      <div className="categories" >
        {categories.map((cat, index) => (
          <span
            key={index}
            className={activeCat === cat ? "active" : undefined}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </span>
        ))}
      </div>
  );
};

export default Categories;
