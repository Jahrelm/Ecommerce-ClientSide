import axios from "axios";
import * as types from "../constants/action-types";



const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const fetchCartRequest = () => ({
  type: types.FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (cart) => ({
  type: types.FETCH_CART_SUCCESS,
  payload: cart,
});

export const fetchCartFailure = (error) => ({
  type: types.FETCH_CART_FAILURE,
  payload: error,
});

export const fetchCart = () => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const userInfo = sessionStorage.getItem('userInfo');
    if (!userInfo) {
      console.error("User ID is not set in sessionStorage");
      dispatch(fetchCartFailure("User ID missing"));
      return;
    }

    const response = await axiosInstance.get(`/cart/list/${userInfo}`);
    dispatch(fetchCartSuccess(response.data));
  } catch (error) {
    dispatch(fetchCartFailure(error.message));
  }
};

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
    const userInfo = sessionStorage.getItem('userInfo');
    if (!userInfo) {
  console.error("User ID is not set in sessionStorage");
}
    console.log(authToken);
    
    const response = await axiosInstance.post(`/cart/add/${userInfo}?productId=${productId}&quantity=1`, 
      {
      },
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    );

    console.log("Response from server:", response.data);
    dispatch(addToCartSuccess(response.data));
    setTimeout(() => {
      dispatch(fetchCart());
    }, 500);
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    dispatch(addToCartFailure(error.message));
  }
};

export const deleteFromCartSuccess = () => ({
  type: types.DELETE_FROM_CART_SUCCESS,
  //payload: 
});


export const removeFromCart = (cartItemId) => async (dispatch) => {
  try {
    const authToken = sessionStorage.getItem('authToken');
    console.log(authToken);
    const response = await axiosInstance.delete(`/cart/remove?cartItemId=${cartItemId}`, 
      {},
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    );
   //dispatch(deleteFromCartSuccess());
    dispatch(fetchCart());
    console.log("Successfuly remove",response.data);
  } catch (error) {
    console.error("Unsucceffuly removed");
  }
};


export const checkoutSuccss = (stripeResponse) => ({
  type: types.CHECKOUT_SUCCESS,
  payload: stripeResponse,
});

export const checkoutFailure = (error) => ({
  type: types.CHECKOUT_FAILURE,
  payload: error,
});

export const checkoutCart = (cartItem) => async(dispatch) => {
  try {
    const authToken = sessionStorage.getItem('authToken');
    
    const payload = {
      product: {
        productId: cartItem.productId,
        title: cartItem.title,
        price: cartItem.subTotal, // Send price without conversion
        currency: cartItem.currency
      },
      quantity: cartItem.quantity
    };
    console.log('Checkout payload:', payload);
    
    const response = await axiosInstance.post('/products-checkout/checkout', 
      payload,
      {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Checkout response:', response.data);

    const stripeUrl = response.data.message;
    
    if (!stripeUrl) {
      throw new Error('No Stripe session URL received from server');
    }

    dispatch(checkoutSuccss(response.data));
    window.location.href = stripeUrl;
    
  } catch (error) {
    console.error("Checkout failed", error.response?.data || error.message);
    dispatch(checkoutFailure(error.message));
  }
};