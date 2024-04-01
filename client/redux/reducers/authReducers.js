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
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    REST_PASSWORD_FAIL,
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


export const adminAuthReducer = (state={}, action) => {
    switch(action.type){
        case ADMIN_LOGIN_REQUEST: 
            return{
                ...state,
                loading: true
            };
        case ADMIN_LOGIN_SUCCESS: 
            return {
                loading: false,
                isAuth: action?.payload?.success,
                message: action?.payload?.data?.message
            };

        case ADMIN_LOGIN_FAIL: 
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload
            };
        
        case CLEAR_DATA : 
            return {
                ...state,
                error: null,
                message: ''
            };

        default: 
            return state
    }
}


export const forgotAuthReducer = (state={}, action) => {
    switch(action.type){
        case FORGOT_PASSWORD_REQUEST: 
            return{
                ...state,
                loading: true
            };
        case FORGOT_PASSWORD_SUCCESS: 
            return {
                loading: false,
                isAuth: action?.payload?.success,
                message: action?.payload?.data?.message
            };

        case FORGOT_PASSWORD_FAIL: 
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload
            };
        
        case CLEAR_DATA : 
            return {
                ...state,
                error: null,
                message: ''
            };

        default: 
            return state
    }
}



export const resetAuthReducer = (state={}, action) => {
    switch(action.type){
        case RESET_PASSWORD_REQUEST: 
            return{
                ...state,
                loading: true
            };
        case RESET_PASSWORD_SUCCESS: 
            return {
                loading: false,
                isAuth: action?.payload?.success,
                message: action?.payload?.data?.message
            };

        case REST_PASSWORD_FAIL: 
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload
            };
        
        case CLEAR_DATA : 
            return {
                ...state,
                error: null,
                message: ''
            };

        default: 
            return state
    }
}