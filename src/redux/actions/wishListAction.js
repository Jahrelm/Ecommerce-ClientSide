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
    const authToken = sessionStorage.getItem('authToken');
    
    if (!userInfo) {
      throw new Error("Please login to view wishlist");
    }
    
    if (!authToken) {
      throw new Error("Authorization token missing");
    }

    const response = await axiosInstance.get(`/wishlist/list/${userInfo}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    
    console.log('Raw API Response:', response.data);
    
    // If no data or empty array, return empty array
    if (!response.data || (Array.isArray(response.data) && response.data.length === 0)) {
      dispatch(fetchWishListSuccess([]));
      return;
    }
    
    // Handle the nested structure of the wishlist data
    let wishlistItems = [];
    
    // Check if response is an array with nested wishListItems
    if (Array.isArray(response.data) && response.data.length > 0 && response.data[0].wishListItems) {
      // Extract wishlist items from the first object in the array
      wishlistItems = response.data[0].wishListItems || [];
    } 
    // Check if response is a single object with wishListItems
    else if (response.data.wishListItems) {
      wishlistItems = response.data.wishListItems || [];
    }
    // If response is already an array of items
    else if (Array.isArray(response.data)) {
      wishlistItems = response.data;
    }
    // If response is a single item
    else {
      wishlistItems = [response.data];
    }
    
    console.log('Extracted wishlist items:', wishlistItems);
    
    // Format the wishlist items for the component
    const formattedData = wishlistItems.map(item => {
      return {
        id: item.id,
        productId: item.product?.productId || item.product?.id,
        product: {
          id: item.product?.productId || item.product?.id,
          title: item.product?.title || "Product",
          brand: item.product?.brand || "Brand",
          price: parseFloat(item.product?.price?.replace('$', '').replace(',', '')) || 0,
          image: item.product?.image || `${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`
        },
        quantity: item.quantity || 1
      };
    });
    
    console.log('Formatted Data:', formattedData);
    
    dispatch(fetchWishListSuccess(formattedData));
  } catch (error) {
    console.error("Wishlist fetch error:", error);
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
        console.log("Adding to wishlist, productId:", productId);
        const authToken = sessionStorage.getItem('authToken');
        const userInfo = sessionStorage.getItem('userInfo');
        
        if (!userInfo) {
            throw new Error("Please login to add items to wishlist");
        }
        
        if (!productId) {
            throw new Error("Product ID is required");
        }

        // First, fetch the product details to ensure we have complete information
        let productDetails = null;
        try {
            const productResponse = await axiosInstance.get(`/products/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            productDetails = productResponse.data;
            console.log("Fetched product details:", productDetails);
        } catch (productError) {
            console.error("Error fetching product details:", productError);
            // Continue with add attempt even if product fetch fails
        }

        // Check if item already exists in wishlist
        try {
            const checkResponse = await axiosInstance.get(`/wishlist/list/${userInfo}`);
            if (Array.isArray(checkResponse.data)) {
                const existingItem = checkResponse.data.find(item => 
                    (item.product?.id === productId || item.productId === productId)
                );
                
                if (existingItem) {
                    throw new Error("Item already exists in wishlist");
                }
            }
        } catch (checkError) {
            console.log("Error checking wishlist:", checkError);
            // Continue with add attempt even if check fails
        }

        // Create a FormData object to handle different parameter types
        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('quantity', 1);

        console.log("Sending request to add to wishlist with productId:", productId);
        
        // Try with form data approach
        const response = await axiosInstance({
            method: 'post',
            url: `/wishlist/add/${userInfo}`,
            data: formData,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log("Add to wishlist response:", response.data);

        if (!response.data) {
            throw new Error("Failed to add item to wishlist");
        }

        // If we have product details, enhance the response data with it
        let enhancedData = response.data;
        if (productDetails) {
            enhancedData = {
                ...response.data,
                product: productDetails
            };
        }

        dispatch(addToWishListSuccess(enhancedData));
        dispatch(fetchWishList());
    } catch (error) {
        console.error("Add to wishlist error:", error);
        console.error("Error details:", error.response?.data || error.message);
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
