import * as types from '../constants/action-types';

const initialState = {
    wishlist: [],
    loading: false,
    error: null,
    test: 1,
};

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case types.FETCH_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist: action.payload,
            };

        case types.FETCH_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.ADD_TO_WISHLIST_SUCCESS: {
            const itemIndex = state.wishlist.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                const newWishList = state.wishlist.map((item, index) => 
                    index === itemIndex ? 
                    { 
                        ...item, 
                        quantity: item.quantity + action.payload.quantity, 
                        price: parseFloat(item.originalPrice) * (item.quantity + action.payload.quantity) 
                    } : item
                );

                return {
                    ...state,
                    wishlist: newWishList
                };
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    originalPrice: parseFloat(action.payload.price)
                };

                return {
                    ...state,
                    wishlist: [...state.wishlist, newItem]
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
                };
    
            case types.MOVE_ALL_TO_CART_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };

        /* case types.DELETE_FROM_CART_SUCCESS: {
            const updatedCart = state.cart.filter(product => product.id !== action.payload);
            return {
                ...state,
                cart: updatedCart,
            };
        }
 */
        default:
            return state;
    }
};

export default wishListReducer;
