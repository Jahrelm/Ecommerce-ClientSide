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
        dispatch(fetchProductsSuccess(response.data));
    } catch (error){
        dispatch(fetchProductsFailure(error.message));
    }

};

export const searchProducts = (query) => ({
    type : types.SEARCH_PRODUCTS,
    payload : query
})