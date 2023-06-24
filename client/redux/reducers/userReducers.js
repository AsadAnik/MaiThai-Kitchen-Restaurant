import {
    ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL,
    ONE_USER_REQUEST, ONE_USER_SUCCESS, ONE_USER_FAIL,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,
    CLEAR_DATA
} from '@/redux/constants/userConstants';


/**
 * ====== All Products Reducer =======
 * @param {Object} state 
 * @param {Object} action 
 * @returns 
 */
export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USER_REQUEST:
            return {
                loading: true,
                users: [],
            };

        case ALL_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            };

        case ALL_USER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


/**
 * ====== Get One User Reducer ======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const oneUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ONE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ONE_USER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                user: action.payload.data,
            };

        case ONE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


/**
 * ====== Update User Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const updateUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_USER_SUCCESS:
            return {
                loading: false,
                updated: action.payload.success,
                user: action.payload.data,
            };

        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                updated: null,
            };

        default:
            return state;
    }
};


/**
 * ====== Delete User Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const deleteUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_USER_SUCCESS:
            return {
                loading: false,
                deleted: action.payload.success,
                user: action.payload.data,
            };

        case DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                deleted: null,
            };

        default:
            return state;
    }
};