import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import {
    LOGIN_AUTH_REQUEST,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAIL,
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