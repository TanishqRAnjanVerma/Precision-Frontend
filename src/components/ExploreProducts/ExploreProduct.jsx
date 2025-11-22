import React from "react";
import { useNavigate } from "react-router-dom";
import { product_list } from "../../assets/assets";
import "../ExploreProducts/exploreproduct.css";

const ExploreProduct = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (productName) => {
    setCategory(productName);
    navigate(`/${productName.toLowerCase()}`);
  };

  return (
    <div className="explore-products" id="explore-products">
      <h1 className="explore-header">Explore Our Products</h1>
      <p className="explore-product-text">
        Choose from diverse products featuring absolute 'A' class products from
        precision mercentile. Our mission is to satisfy our customers with best
        quality products to experience the awesome life-style.{" "}
      </p>
      <div className="explore-product-list">
        {product_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.product_name)}
              className="explore-product-list-item"
            >
              <div className="product-list-item-img">
                <img
                  src={item.product_image}
                  alt=""
                  className={category === item.product_name ? "active" : ""}
                />
              </div>
              <p className="explore-title">{item.product_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreProduct;
