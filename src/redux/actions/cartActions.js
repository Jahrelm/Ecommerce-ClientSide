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
