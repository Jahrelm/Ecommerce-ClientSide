import axios from 'axios';
import * as types from '../constants/action-types';
import { fetchCart } from './cartActions';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProductsRequest = () => ({
    type: types.FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload : products
});

export const fetchProductsFailure = (error) => ({
    type: types.FETCH_PRODUCTS_FAILURE,
    payload : error
});

export const fetchProducts = () => async(dispatch) => {
    dispatch(fetchProductsRequest());
    try{
        const response = await axiosInstance.get('/products/list');
        console.log(response.data);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error){
        dispatch(fetchProductsFailure(error.message));
    }

};

export const searchProductsRequest = () => ({
  type: types.SEARCH_PRODUCTS_REQUEST,
});

export const searchProductsSuccess = (products) => ({
  type: types.SEARCH_PRODUCTS_SUCCESS,
  payload : products
});

export const searchProductsFailure = (error) => ({
  type: types.SEARCH_PRODUCTS_FAILURE,
  payload : error
});

export const searchProducts = (title) => async (dispatch) => {
  console.log("title 1" + title);
  dispatch(searchProductsRequest());
  try {
    const authToken = sessionStorage.getItem('authToken');
    console.log(authToken);
    const response = await axiosInstance.get(`/products/list/search?title=${title}`, 
      {},
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    );

    console.log("Response from server:", response.data);
    dispatch(searchProductsSuccess(response.data));
  } catch (error) {
    console.error("Error", error.message);
    dispatch(searchProductsFailure (error.message));
  }
};

  