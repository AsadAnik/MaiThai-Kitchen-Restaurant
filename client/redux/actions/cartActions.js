import axios from 'axios';
import { config } from '@/utils/httpModeConfig';
import { ADD_TO_CART, REMOVE_TO_CART, SAVE_SHIPPING_INFO } from '@/redux/constants/cartConstants';


const API_URL = process.env.API_URL;

/**
 * ===== ADD TO CART ACTION =====
 * @param {String} id 
 * @param {Number} quantity 
 * @returns 
 */
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data: response } = await axios.get(`${API_URL}/products/${id}`, config);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            productId: response?.data?._id,
            name: response?.data?.name,
            details: response?.data?.details,
            image: response?.data?.image,
            price: response?.data?.price,
            stock: response?.data?.stock,
            quantity,
        },
    });

    // set into the localStorage..
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


/**
 * ===== REMOVE FROM CART ACTION ====
 * @param {String} id 
 * @returns 
 */
export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({ type: REMOVE_TO_CART, payload: id });

    // lets save from the localStorage..
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};