import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import {
    ALL_PACKAGE_REQUEST, ALL_PACKAGE_SUCCESS, ALL_PACKAGE_FAIL,
    CREATE_PACKAGE_REQUEST, CREATE_PACKAGE_SUCCESS, CREATE_PACKAGE_FAIL,
    ONE_PACKAGE_REQUEST, ONE_PACKAGE_SUCCESS, ONE_PACKAGE_FAIL,
    UPDATE_PACKAGE_REQUEST, UPDATE_PACKAGE_SUCCESS, UPDATE_PACKAGE_FAIL,
    DELETE_PACKAGE_REQUEST, DELETE_PACKAGE_SUCCESS, DELETE_PACKAGE_FAIL,
} from '@/redux/constants/packageConstants';

const API_URL = process.env.API_URL;


/**
 * ======= Get All Packages =======
 * @returns 
 */
export const getAllPackages = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PACKAGE_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/packages`, config);

        dispatch({
            type: ALL_PACKAGE_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ALL_PACKAGE_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ======= Get One Package =======
 * @returns 
 */
export const getOnePackage = (id) => async (dispatch) => {
    try {
        dispatch({ type: ONE_PACKAGE_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/products/${id}`, config);

        dispatch({
            type: ONE_PACKAGE_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ONE_PACKAGE_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ====== Create Package =======
 * @returns
 */
export const createPackage = (data) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PACKAGE_REQUEST });

        const { data: response } = await axios.post(`${API_URL}/packages`, data, config);

        dispatch({
            type: CREATE_PACKAGE_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: CREATE_PACKAGE_FAIL,
            payload: error.message,
        });
    }
};


/**
 * ====== Update Package =======
 * @returns
 */
export const updatePackage = (id, data) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PACKAGE_REQUEST });

        const { data: response } = await axios.put(`${API_URL}/packages/${id}`, data, config);

        dispatch({
            type: UPDATE_PACKAGE_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PACKAGE_FAIL,
            payload: error.message,
        });
    }
};



/**
 * ======== Delete Package ======
 * @param {*} productId 
 * @returns 
 */
export const deletePackage = (id) => async (dispatch) =>  {
    try {
        dispatch({ type: DELETE_PACKAGE_REQUEST });

        const { data: response } = await axios.delete(`${API_URL}/packages/${id}`, config);

        dispatch({
            type: DELETE_PACKAGE_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: DELETE_PACKAGE_FAIL,
            payload: error.message,
        });
    }
};