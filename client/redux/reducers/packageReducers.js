import {
    ALL_PACKAGE_REQUEST, ALL_PACKAGE_SUCCESS, ALL_PACKAGE_FAIL,
    CREATE_PACKAGE_REQUEST, CREATE_PACKAGE_SUCCESS, CREATE_PACKAGE_FAIL,
    ONE_PACKAGE_REQUEST, ONE_PACKAGE_SUCCESS, ONE_PACKAGE_FAIL,
    UPDATE_PACKAGE_REQUEST, UPDATE_PACKAGE_SUCCESS, UPDATE_PACKAGE_FAIL,
    DELETE_PACKAGE_REQUEST, DELETE_PACKAGE_SUCCESS, DELETE_PACKAGE_FAIL,
    CLEAR_DATA
} from '@/redux/constants/packageConstants';


/**
 * ====== All Packages Reducer =======
 * @param {Object} state 
 * @param {Object} action 
 * @returns 
 */
export const allPackagesReducer = (state = { packages: [] }, action) => {
    switch (action.type) {
        case ALL_PACKAGE_REQUEST:
            return {
                loading: true,
                packages: [],
            };

        case ALL_PACKAGE_SUCCESS:
            return {
                loading: false,
                packages: action.payload.data,
            };

        case ALL_PACKAGE_FAIL:
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
 * ======= Create New Package =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const createNewPackageReducer = (state = { package: {} }, action) => {
    switch (action.type) {
        case CREATE_PACKAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_PACKAGE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.data,
            };

        case CREATE_PACKAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                success: null,
            };

        default:
            return state;
    }
};


/**
 * ====== Get One Package Reducer ======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const onePackageReducer = (state = { package: {} }, action) => {
    switch (action.type) {
        case ONE_PACKAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ONE_PACKAGE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.data,
            };

        case ONE_PACKAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_DATA:
            return {
                ...state,
                error: null,
                success: null,
            };

        default:
            return state;
    }
};


/**
 * ====== Update Package Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const updatePackageReducer = (state = { package: {} }, action) => {
    switch (action.type) {
        case UPDATE_PACKAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_PACKAGE_SUCCESS:
            return {
                loading: false,
                updated: action.payload.success,
                product: action.payload.data,
            };

        case UPDATE_PACKAGE_FAIL:
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
 * ====== Delete Package Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const deletePackageReducer = (state = { package: {} }, action) => {
    switch (action.type) {
        case DELETE_PACKAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_PACKAGE_SUCCESS:
            return {
                loading: false,
                deleted: action.payload.success,
                product: action.payload.data,
            };

        case DELETE_PACKAGE_FAIL:
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