import * as types from "../constants/action-types";

const initialState = {
    user : null,
    error : null,
   loading : false,

};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                user : action.payload,
                error : null,
                loading : false,
               
            };
        case types.LOGIN_FAILURE:
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