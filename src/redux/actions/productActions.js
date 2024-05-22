import axios from 'axios';
import * as types from '../constants/action-types';

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
        const response = await axios.get('http://localhost:8080/products/list');
        console.log(response.data);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error){
        dispatch(fetchProductsFailure(error.message));
    }

};

export const searchProducts = (query) => ({
    type : types.SEARCH_PRODUCTS,
    payload : query
});

export const addToCartSuccess = (data) => ({
    type: types.ADD_TO_CART_SUCCESS,
    payload: data,
  });
  
  export const addToCartFailure = (error) => ({
    type: types.ADD_TO_CART_FAILURE,
    payload: error,
  });

  export const addToCart = (productId) => async (dispatch) => {
    try {
      const authToken = sessionStorage.getItem('authToken');
      console.log(authToken);
      const response = await axios.post(`http://localhost:8080/cart/add?productId=${productId}&quantity=1`, 
        {},
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );
  
      console.log("Response from server:", response.data);
      dispatch(addToCartSuccess(response.data));
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      dispatch(addToCartFailure(error.message));
    }
};

  