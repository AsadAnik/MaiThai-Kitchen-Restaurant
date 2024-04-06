import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import {
    LOGIN_AUTH_REQUEST,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAIL,
    REGISTER_AUTH_REQUEST,
    REGISTER_AUTH_SUCCESS,
    REGISTER_AUTH_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    ADMIN_OTP_REQUESST,
    ADMIN_OTP_SUCCESS,
    ADMIN_OPT_FAIL,
    RESET_PASSWORD_REQUEST,
    REST_PASSWORD_SUCCESS,
    REST_PASSWORD_FAIL
} from '@/redux/constants/authConstants';

const API_URL = process.env.API_URL;


/**
 * ===== Auth Login =====
 */
export const loginAuth = (authData) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_AUTH_REQUEST });

        const { data: response } = await axios.post(`${API_URL}/auth/login`, authData, config);

        dispatch({
            type: LOGIN_AUTH_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: LOGIN_AUTH_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ===== Auth Register =====
 */

export const registerAuth = (authData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_AUTH_REQUEST });

        const { data: response } = await axios.post(`${API_URL}/auth/register`, authData, config);

        dispatch({
            type: REGISTER_AUTH_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: REGISTER_AUTH_FAIL,
            payload: error.message,
        });
    }
};


export const loginAdminAuth = (authData) => async (dispatch) => {
    try{
        dispatch({ type: ADMIN_LOGIN_REQUEST });
        const {data: response} = await axios.post(`${API_URL}/admin/login`, authData,config);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: response
        });
    } catch(error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.message
        });
    }
}

export const forgotPasswordAuth = (forgotData) => async (dispatch) => {
    try{
        dispatch({type: FORGOT_PASSWORD_REQUEST});
        const {data: response} = await axios.post(`${API_URL}/auth/forgot-password`, forgotData, config);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: response
        })
    } catch(error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.message
        })
    }
}

export const resetPasswordAuth = (resetData) => async (dispatch) => {
    try{
        dispatch({type: RESET_PASSWORD_REQUEST});
        const {data: response} = await axios.post(`${API_URL}/auth/reset-password`, resetData, config);

        dispatch({
            type: REST_PASSWORD_SUCCESS,
            payload: response
        })
    } catch(error) {
        dispatch({
            type: REST_PASSWORD_FAIL,
            payload: error.message
        })
    }
}


export const adminOtpAuth = (verify) => async (dispatch) => {
    try{
        dispatch({type: ADMIN_OTP_REQUESST});
        const {data: response} = await axios.get(`${API_URL}/auth/reset-password-verify?code=${verify}`, config);

        dispatch({
            type: ADMIN_OTP_SUCCESS,
            payload: response
        })
    } catch(error) {
        dispatch({
            type: ADMIN_OPT_FAIL,
            payload: error.message
        })
    }
}