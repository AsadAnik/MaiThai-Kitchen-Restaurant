import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import {
    ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL,
    ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAIL,
    CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL,
    ONE_PRODUCT_REQUEST, ONE_PRODUCT_SUCCESS, ONE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL,
} from '@/redux/constants/productConstants';
// import { toast } from 'react-toastify';

const API_URL = process.env.API_URL;

/**
 * ===== Get All Products =====
 */
export const getProducts = (limit, page, search, priceRange, category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        // const promise = axios.get(`${API_URL}/products/withFeatures?limit=${limit}&page=${page}`, config);
        // toast.promise(promise, {
        //     pending: 'Promise is pending',
        //     success: 'Product Loaded 👌',
        //     error: 'Promise rejected 🤯',
        // }, {
        //     position: "top-right",
        //     theme: "colored",
        //     autoClose: 1000,
        // });
        // const { data: response } = await promise;

        let URL_REQUEST = `${API_URL}/products/withFeatures`;

        if (limit !== null && page !== null) {
            URL_REQUEST += `?limit=${limit}&page=${page}`;

            if (search && search.length > 1) {
                URL_REQUEST += `&search=${search}`;
            }
        }

        if (limit === null && page === null && search) {
            URL_REQUEST += `?search=${search}`;
        }

        if (priceRange?.length) {
            URL_REQUEST += `?minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`;
        }

        if (category) {
            if (category !== 'All' || category !== 'all') {
                URL_REQUEST += `?category=${category}`;
            }
        }

        const { data: response } = await axios.get(URL_REQUEST, config);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: response?.data,
        });

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ======= Get All Admin Products =======
 * @returns 
 */
export const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCTS_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/products`, config);

        dispatch({
            type: ADMIN_PRODUCTS_SUCCESS,
            payload: response?.data,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCTS_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ======= Get One Product =======
 * @returns 
 */
export const getOneProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: ONE_PRODUCT_REQUEST });

        const { data: response } = await axios.get(`${API_URL}/products/${productId}`, config);

        dispatch({
            type: ONE_PRODUCT_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: ONE_PRODUCT_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ====== Create Product =======
 * @returns
 */
export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data: response } = await axios.post(`${API_URL}/products`, product, config);

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.message,
        });
    }
};

/**
 * ====== Update Product =======
 * @returns
 */
export const updateProduct = (productId, data) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const { data: response } = await axios.put(`${API_URL}/products/${productId}`, data, config);

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.message,
        });
    }
};


/**
 * ======== Delete Product ======
 * @param {*} productId 
 * @returns 
 */
export const deleteProduct = (productId) => async (dispatch) =>  {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const { data: response } = await axios.delete(`${API_URL}/products/${productId}`, config);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: response,
        });

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.message,
        });
    }
};