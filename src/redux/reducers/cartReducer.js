
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
            return {
                ...state,
                cart: [...state.cart, action.payload]     
            };

        case types.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.payload,
            };
        default :
            return state;
        
    }
};

export default cartReducer;