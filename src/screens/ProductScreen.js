import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/productsActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link } from "react-router-dom";

function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return (
    <div>
      <h1> This is product detail page</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "200px", height: "auto" }}
          />
         <button><Link to='/'>Back to Home</Link></button>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
