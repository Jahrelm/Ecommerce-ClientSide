import axios from "axios";

import * as types from "../constants/action-types";


export const signUpSuccess = (data) => ({
    type : types.SIGN_UP_SUCCESS,
    payload : data
})

export const signUpFailure = (error) => ({
    type : types.SIGN_UP_FAILURE,
    payload : error,
});


export const signUpUser = (formData) => async (dispatch) => {
    try{
        const response = await axios.post("http://localhost:8080/auth/register",formData);
        console.log(response.data);
        dispatch(signUpSuccess(response.data))
      }catch(error) {
        console.error("Error Login:", error.message);
        dispatch(signUpFailure(error.message));
      }
}

export const loginSuccess = (data) => ({
    type : types.LOGIN_SUCCESS,
    payload : data,
});

export const loginFailure = (error) => ({
    type : types.LOGIN_FAILURE,
    payload : error,

});


export const loginUser = (formData) => async (dispatch) => {
    
    try{
    
        const response = await axios.post('http://localhost:8080/auth/login', formData);
        console.log(response.data);
        dispatch(loginSuccess(response.data));
        const authToken = response.data.jwt
        console.log(authToken);
        sessionStorage.setItem('authToken', authToken)
        
    } catch (error){
        console.error("Error Login:", error.message);
        dispatch(loginFailure(error.message));
    }

}
export const resetPasswordSuccess = (data) => ({
    type : types.RESET_PASSWORD_SUCCESS,
    payload : data,
});

export const resetPasswordFailure = (error) => ({
    type : types.RESET_PASSWORD_FAILURE,
    payload : error,
});

//post request for reset password
/* export const resetPasswordRequest = (formData) => async (dispatch) => {
    try{
        const response = await axios.post("http://localhost:8080/password/reset-request")

    }catch(error){


    }





} */


