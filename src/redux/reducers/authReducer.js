import * as types from "../constants/action-types";

const initialState = {
    user : null,
    error : null,
   loading : false,
   sucess : false,

};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                user : action.payload,
                error : null,
                loading : false,
                success : true,
               
            };
        case types.LOGIN_FAILURE:
            return{
                ...state,
                user : null,
                error : action.payload,
                loading : false,
                success : false,
            };
        case types.SIGN_UP_SUCCESS:
            return{
                ...state,
                user : action.payload,
                error : null,
                loading : false,
               
               
            };
        case types.SIGN_UP_FAILURE:
            return{
                ...state,
                user : null,
                error : action.payload,
                loading : false,
            };
        case types.RESET_PASSWORD_REQUEST_SUCCESS:
            return{
                ...state, 
                user : action.payload,
                success : true,
                loading : false,
              
            };
        case types.RESET_PASSWORD_REQUEST_FAILURE:
            return{
                ...state, 
                user : null,
                error : action.payload,
                loading : false,
              
            };
        case types.RESET_PASSWORD_SUCCESS:
                return{
                    ...state, 
                    user : action.payload,
                    success : true,
                    loading : false,
                  
                };
        case types.RESET_PASSWORD_FAILURE:
                return{
                    ...state, 
                    user : null,
                    error : action.payload,
                    loading : false,
                  
                };
        default:
            return state;
    }
};

export default authReducer;