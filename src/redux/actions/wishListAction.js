import axios from "axios";
import * as types from "../constants/action-types";



const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    const response = await axiosInstance.get("/wishlist/list");
    dispatch(fetchWishListSuccess(response.data));
  } catch (error) {
    dispatch(fetchWishListFailure(error.message));
  }
};


export const addToWishListSuccess = (data) => ({
    type : types.ADD_TO_WISHLIST_SUCCESS,
    payload : data

});

export const addToWishListFailure = (error) => ({
    type : types.ADD_TO_WISHLIST_FAILURE,
    payload : error

});


export const addToWishList = (productId) => async(dispatch) => {
    try{
        const authToken = sessionStorage.getItem('authToken');
        const response = await axiosInstance.post(`/wishlist/add?productId=${productId}&quantity=1`, 
            {},
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }

            }
        );

        console.log("Response from server:", response.data);
        dispatch(addToWishListSuccess(response.data));
    }catch (error){
        console.log("Error : ", error.message);
        dispatch(addToWishListFailure(error.message));

    }
}

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
      const response = await axiosInstance.post(
          '/wishlist/moveAllToCart',
          {},
          {
              headers: {
                  'Authorization': `Bearer ${authToken}`,
              },
          }
      );

      console.log("Response from server:", response.data);
      dispatch(moveAllToCartSuccess());
      // Fetch the updated cart
      dispatch(fetchCart());
  } catch (error) {
      console.log("Error: ", error.message);
      dispatch(moveAllToCartFailure(error.message));
  }
};

