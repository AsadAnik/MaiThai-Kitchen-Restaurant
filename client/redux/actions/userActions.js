import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import {
    ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL,
    ONE_USER_REQUEST, ONE_USER_SUCCESS, ONE_USER_FAIL,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,
} from '@/redux/constants/userConstants';

const API_URL = process.env.API_URL;

/**
 * ===== Get All Users =====
 */
export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USER_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/users`, config);

        dispatch({
            type: ALL_USER_SUCCESS,
            payload: response?.data,
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ======= Get One User =======
 * @returns 
 */
export const getOneUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: ONE_USER_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/users/${userId}`, config);

        dispatch({
            type: ONE_USER_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ONE_USER_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ====== Update User =======
 * @returns
 */
export const updateUser = (userId, data) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST });

        const { data: response } = await axios.put(`${API_URL}/users/${userId}`, data, config);

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.message,
        });
    }
};


/**
 * ======== Delete User ======
 * @param {*} userId 
 * @returns 
 */
export const deleteUser = (userId) => async (dispatch) =>  {
    try {
        dispatch({ type: DELETE_USER_REQUEST });

        const { data: response } = await axios.delete(`${API_URL}/users/${userId}`, config);

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.message,
        });
    }
};