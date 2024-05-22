import axios from "axios";
import * as types from "../constants/action-types";

export const loginSuccess = (data) => ({
    type : types.LOGIN_SUCCESS,
    payload : data,

});

export const loginFailure = (error) => ({
    type : types.LOGIN_FAILURE,
    payload : error,

});

export const Login = () => async (dispatch) => {
    try{
        const response = await axios.post('http://localhost:8080/auth/login');
        dispatch(loginSuccess(response.data));
    } catch (error){
        console.error("Error Login:", error.message);
        dispatch(loginFailure(error.message));
    }

}
