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
                
        case types.SEARCH_PRODUCTS:
            const query = action.payload.toLowerCase();
            const filteredProducts = state.products.filter(product => {
                 product.title.toLowerCase().includes(query);


            console.log("Filtered Products:", filteredProducts);
            });


            return {
                ...state,
                loading : false,
                products : filteredProducts,
            }
        default :
            return state;
        
    }
};

export default productReducer;