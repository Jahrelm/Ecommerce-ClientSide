import axios from "axios";
import * as types from "../constants/action-types";
import { fetchCart } from "./cartActions";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch Wishlist Actions
export const fetchWishListRequest = () => ({
  type: types.FETCH_WISHLIST_REQUEST,
});

export const fetchWishListSuccess = (wishlist) => ({
  type: types.FETCH_WISHLIST_SUCCESS,
  payload: wishlist,
});

export const fetchWishListFailure = (error) => ({
  type: types.FETCH_WISHLIST_FAILURE,
  payload: error,
});

export const fetchWishList = () => async (dispatch) => {
  dispatch(fetchWishListRequest());
  try {
    const userInfo = sessionStorage.getItem('userInfo');
    if (!userInfo) {
      throw new Error("Please login to view wishlist");
    }

    const response = await axiosInstance.get(`/wishlist/list/${userInfo}`);
    
    let formattedData = [];
    if (Array.isArray(response.data)) {
      formattedData = response.data.map(item => {
        const productData = item.product || item;
        return {
          id: item.id || productData.id || item.productId,
          title: productData.title || productData.name || 'Product',
          brand: productData.brand || (item.product && item.product.brand) || 'N/A',
          price: productData.price || (item.product && item.product.price) || 0,
          quantity: item.quantity || 1,
          totalCost: (productData.price || (item.product && item.product.price) || 0) * (item.quantity || 1)
        };
      });
    } else if (response.data && typeof response.data === 'object') {
      const item = response.data;
      const productData = item.product || item;
      formattedData = [{
        id: item.id || productData.id || item.productId,
        title: productData.title || productData.name || 'Product',
        brand: productData.brand || (item.product && item.product.brand) || 'N/A',
        price: productData.price || (item.product && item.product.price) || 0,
        quantity: item.quantity || 1,
        totalCost: (productData.price || (item.product && item.product.price) || 0) * (item.quantity || 1)
      }];
    }
    
    dispatch(fetchWishListSuccess(formattedData));
  } catch (error) {
    dispatch(fetchWishListFailure(error.message));
  }
};

// Add to Wishlist Actions
export const addToWishListSuccess = (data) => ({
    type: types.ADD_TO_WISHLIST_SUCCESS,
    payload: data
});

export const addToWishListFailure = (error) => ({
    type: types.ADD_TO_WISHLIST_FAILURE,
    payload: error
});

export const addToWishList = (productId) => async(dispatch) => {
    try {
        const authToken = sessionStorage.getItem('authToken');
        const userInfo = sessionStorage.getItem('userInfo');
        
        if (!userInfo) {
            throw new Error("Please login to add items to wishlist");
        }
        
        if (!productId) {
            throw new Error("Product ID is required");
        }

        const checkResponse = await axiosInstance.get(`/wishlist/list/${userInfo}`);
        const existingItem = checkResponse.data.find(item => 
            item.product?.id === productId || item.productId === productId
        );
        
        if (existingItem) {
            throw new Error("Item already exists in wishlist");
        }

        const response = await axiosInstance.post(
            `/wishlist/add/${userInfo}`,
            {
                productId: productId,
                quantity: 1
            },
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );

        if (!response.data) {
            throw new Error("Failed to add item to wishlist");
        }

        dispatch(addToWishListSuccess(response.data));
        dispatch(fetchWishList());
    } catch (error) {
        dispatch(addToWishListFailure(error.message));
    }
};

// Remove from Wishlist Actions
export const removeFromWishlistSuccess = (itemId) => ({
    type: types.REMOVE_FROM_WISHLIST_SUCCESS,
    payload: itemId,
});

export const removeFromWishlistFailure = (error) => ({
    type: types.REMOVE_FROM_WISHLIST_FAILURE,
    payload: error,
});

export const removeFromWishlist = (wishlistItemId) => async (dispatch) => {
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (!authToken) {
            throw new Error("Please login to remove items from wishlist");
        }
        
        await axiosInstance.delete(
            `/wishlist/remove?wishListId=${wishlistItemId}`,
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );
        
        dispatch(removeFromWishlistSuccess(wishlistItemId));
        dispatch(fetchWishList());
    } catch (error) {
        dispatch(removeFromWishlistFailure(error.message));
    }
};

// Move All to Cart Actions
export const moveAllToCartSuccess = () => ({
    type: types.MOVE_ALL_TO_CART_SUCCESS,
});

export const moveAllToCartFailure = (error) => ({
    type: types.MOVE_ALL_TO_CART_FAILURE,
    payload: error,
});

export const moveAllToCart = () => async (dispatch) => {
    try {
        const authToken = sessionStorage.getItem('authToken');
        const userInfo = sessionStorage.getItem('userInfo');
        
        if (!userInfo) {
            throw new Error("Please login to move items to cart");
        }
        
        await axiosInstance.post(
            `/wishlist/moveToCart/${userInfo}`,
            {},
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            }
        );

        dispatch(moveAllToCartSuccess());
        dispatch(fetchCart());
        dispatch(fetchWishList());
    } catch (error) {
        dispatch(moveAllToCartFailure(error.message));
    }
};

// Clear Wishlist Actions
export const clearWishlistSuccess = () => ({
    type: types.CLEAR_WISHLIST_SUCCESS,
});

export const clearWishlistFailure = (error) => ({
    type: types.CLEAR_WISHLIST_FAILURE,
    payload: error,
});

export const clearWishlist = () => async (dispatch) => {
    try {
        const authToken = sessionStorage.getItem('authToken');
        if (!authToken) {
            throw new Error("Please login to clear wishlist");
        }
        
        await axiosInstance.delete(
            '/wishlist/removeAll',
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );
        
        dispatch(clearWishlistSuccess());
        dispatch(fetchWishList());
    } catch (error) {
        dispatch(clearWishlistFailure(error.message));
    }
};

