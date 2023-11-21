import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>This is home page here!</h1>
      {loading ? (
       <Loader />
      ) : error ? (
       <Message message={error}/>
      ) : (
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
