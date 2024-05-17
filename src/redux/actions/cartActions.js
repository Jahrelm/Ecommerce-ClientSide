import axios from 'axios';
import * as types from '../constants/action-types';

export const fetchCartRequest = () => ({
    type: types.FETCH_CART_REQUEST
});

export const fetchCartSuccess = (cart) => ({
    type: types.FETCH_CART_SUCCESS,
    payload : cart
});

export const fetchCartFailure = (error) => ({
    type: types.FETCH_CART_FAILURE,
    payload : error
});

export const fetchCart = () => async(dispatch) => {
    dispatch(fetchCartRequest());
    try{
        const response = await axios.get('http://localhost:8080/cart/list');
        dispatch(fetchCartSuccess(response.data));
    }catch(error){
        dispatch(fetchCartFailure(error.message));
    }
}


export const addToCartSuccess = (data) => ({
    type: types.ADD_TO_CART_SUCCESS,
    payload : data
});

export const addToCartFailure = (error) => ({
    type: types.ADD_TO_CART_FAILURE,
    payload : error
});


export const addToCart = ({productId,quantity}) => async(dispatch) => {
    try{
        const response = await axios.post('http://localhost:8080/cart/add', {productId,quantity,});
        dispatch(addToCartSuccess(response.data));
    }catch(error){
        dispatch(addToCartFailure(error.message));
    }
}
