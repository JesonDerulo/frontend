import React from "react";

function Product({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100px", // Adjust the width as needed
            height: "auto", // Maintain aspect ratio
            borderRadius: "50%", // Make the image round
          }}
        />
      )}
    </div>
  );
}

export default Product;
