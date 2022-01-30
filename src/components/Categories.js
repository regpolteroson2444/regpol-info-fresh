import React from "react";

const Categories = ({ categories, filterItems, chosenCategory }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <button
              className="CategoryOption"
              className={
                chosenCategory === category
                  ? "CategoryOption CategoryOptionActive"
                  : "CategoryOption"
              }
              onClick={() => filterItems(category)}
              key={index}
            >
              {category}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Categories;
