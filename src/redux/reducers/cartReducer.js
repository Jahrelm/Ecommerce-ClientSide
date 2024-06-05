
import * as types from '../constants/action-types';

const initialState = {
    cart : [],
    loading : false,
    error : null,
    test : 1,
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case types.FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart : action.payload,
            };
        
        case types.FETCH_CART_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };
        case types.ADD_TO_CART_SUCCESS:
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
                return {
                    ...state,
                    cart: [...state.cart]
                };
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1
                };
                return {
                    ...state,
                    cart: [...state.cart, newItem]
                };
            }

        case types.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.payload,
            };
        case types.DELETE_FROM_CART_SUCCESS: {
                const updatedCart = state.cart.filter(product => product.id !== action.payload);
                return {
                    ...state,
                    cart: updatedCart,
                };
            }  
        default :
            return state;
        
    }
};

export default cartReducer;