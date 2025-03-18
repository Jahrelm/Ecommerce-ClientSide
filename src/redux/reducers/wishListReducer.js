import * as types from '../constants/action-types';

const initialState = {
    wishlist: [],
    loading: false,
    error: null,
};

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case types.FETCH_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist: action.payload,
                error: null,
            };

        case types.FETCH_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.ADD_TO_WISHLIST_SUCCESS: {
            // Check if item already exists in wishlist
            const itemWishIndex = state.wishlist.findIndex(item => item.id === action.payload.id);

            if (itemWishIndex >= 0) {
                // Update existing item quantity and price
                const newWishList = state.wishlist.map((item, index) => 
                    index === itemWishIndex ? 
                    { 
                        ...item, 
                        quantity: item.quantity + 1, 
                        totalCost: parseFloat(item.price) * (item.quantity + 1) 
                    } : item
                );

                return {
                    ...state,
                    wishlist: newWishList,
                    error: null,
                };
            } else {
                // Add new item to wishlist
                const newWishItem = {
                    ...action.payload,
                    quantity: 1,
                    totalCost: parseFloat(action.payload.price)
                };

                return {
                    ...state,
                    wishlist: [...state.wishlist, newWishItem],
                    error: null,
                };
            }
        }

        case types.ADD_TO_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.MOVE_ALL_TO_CART_SUCCESS:
            return {
                ...state,
                wishlist: [],
                error: null,
            };
    
        case types.MOVE_ALL_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.REMOVE_FROM_WISHLIST_SUCCESS: {
            // Filter out the removed item
            const updatedWishlist = state.wishlist.filter(item => item.id !== action.payload);
            return {
                ...state,
                wishlist: updatedWishlist,
                error: null,
            };
        }

        case types.REMOVE_FROM_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.CLEAR_WISHLIST_SUCCESS:
            return {
                ...state,
                wishlist: [],
                error: null,
            };

        case types.CLEAR_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default wishListReducer;