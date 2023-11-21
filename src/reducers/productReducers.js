import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  error: null,
};

export const productListReducer = (
  state = { ...initialState, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCTS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { ...initialState, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
