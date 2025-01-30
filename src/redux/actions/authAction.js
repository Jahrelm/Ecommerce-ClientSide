import axios from "axios";


import * as types from "../constants/action-types";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });


export const signUpSuccess = (data) => ({
    type: types.SIGN_UP_SUCCESS,
    payload: data
})

export const signUpFailure = (error) => ({
    type: types.SIGN_UP_FAILURE,
    payload: error,
});


export const signUpUser = (formData) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/auth/register', formData);
        console.log(response.data);
        dispatch(signUpSuccess(response.data))
    } catch (error) {
        console.error("Error Login:", error.message);
        dispatch(signUpFailure(error.message));
    }
}

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    payload: error,

});


export const loginUser = (formData) => async (dispatch) => {

    try {

        const response = await axiosInstance.post('/auth/login', formData);
        console.log(response.data);
        dispatch(loginSuccess(response.data));
        const authToken = response.data.jwt
        const userInfo = response.data.user.userId
        console.log(authToken);
        sessionStorage.setItem('authToken', authToken)
        sessionStorage.setItem('userInfo', userInfo);

    } catch (error) {
        let errorMessage = "Invalid Username or Password";
        console.error("Error Login:", errorMessage);
        dispatch(loginFailure(errorMessage));
    }

}
export const resetPasswordRequestSuccess = (data) => ({
    type: types.RESET_PASSWORD_REQUEST_SUCCESS,
    payload: data,
});

export const resetPasswordRequestFailure = (error) => ({
    type: types.RESET_PASSWORD_REQUEST_FAILURE,
    payload: error,
});

export const resetPasswordRequest = (formData) => async (dispatch) => {
    try {
     
        const response = await axiosInstance.post('/password/reset-request', formData);
        console.log(response.data);
        dispatch(resetPasswordRequestSuccess(response.data));
    } catch (error) {
        console.log("Error", error.message);
        dispatch(resetPasswordRequestFailure(error.message))

    }

}

export const resetPasswordSuccess = (data) => ({
    type: types.RESET_PASSWORD_SUCCESS,
    payload: data,
});

export const resetPasswordFailure = (error) => ({
    type: types.RESET_PASSWORD_FAILURE,
    payload: error,
});

export const resetPassword = (formData) => async (dispatch) => {
    try {
      
        const response = await axiosInstance.post('/password/reset', formData);
        console.log(response.data);
        dispatch(resetPasswordSuccess(response.data));
    } catch (error) {
        console.log("Error", error.message);
        dispatch(resetPasswordFailure(error.message))

    }

}


