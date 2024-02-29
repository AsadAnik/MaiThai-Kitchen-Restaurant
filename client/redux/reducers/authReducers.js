import {
    LOGIN_AUTH_REQUEST,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAIL,
    REGISTER_AUTH_REQUEST,
    REGISTER_AUTH_SUCCESS,
    REGISTER_AUTH_FAIL,
    CLEAR_DATA,
} from '@/redux/constants/authConstants';

/**
 * ====== Update User Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const authLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_AUTH_SUCCESS:
            return {
                loading: false,
                isAuth: action.payload?.success,
                message: action.payload?.data?.message,
            };

        case LOGIN_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                message: '',
            };

        default:
            return state;
    }
};

export const authRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_AUTH_SUCCESS:
            return {
                loading: false,
                isAuth: action.payload?.success,
                message: action.payload?.data?.message,
            };

        case REGISTER_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                message: '',
            };

        default:
            return state;
    }
};