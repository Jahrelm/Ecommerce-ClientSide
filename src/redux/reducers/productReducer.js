import * as types from '../constants/action-types';

const initialState = {
    products: [],
    loading : false,
    error : null,
    test : 1,
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products : action.payload,
            };
        
        case types.FETCH_PRODUCTS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };
        default :
            return state;
        
    }
};

export default productReducer;