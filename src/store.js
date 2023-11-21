import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";


const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
