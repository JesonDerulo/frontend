import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import Product from "../components/Product";

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
      { loading ? (<p>Loading...</p> ): error ?(<p>Error: {error}</p>)
      : (
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      )  
    }
    </div>
  );
}

export default HomeScreen;
