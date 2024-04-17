import React from "react";

const Category = ({ category }) => {
  const { title, subTitle, categories } = category;
  return (
    <section>
      <div className="heading-container">
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="sub-title">{subTitle}</p>
        </div>
      </div>

      <div className="categories-container">
        {categories.map((category, index) => {
          return (
            <div className="category-container" key={index}>
              <div className="image">
                <img src={category.icon} />
              </div>
              <h3>{category.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
