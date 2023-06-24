import {
    ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS,
    ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAIL,
    CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL,
    ONE_PRODUCT_REQUEST, ONE_PRODUCT_SUCCESS, ONE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL,
    CLEAR_DATA,
} from '@/redux/constants/productConstants';


/**
 * ====== All Products Reducer =======
 * @param {Object} state 
 * @param {Object} action 
 * @returns 
 */
export const allProductsReducer = (state = { searchedProducts: [], products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                searchedProducts: action.payload.searchedData,
                products: action.payload.data,
                allProducts: action.payload.allData,
                currentPage: action.payload.currentPage,
                perPage: action.payload.perPage,
                totalPages: action.payload.totalPages,
                totalProducts: action.payload.totalProducts,
            };

        case ADMIN_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };

        case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCTS_FAIL:
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
 * ======= Create New Product =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const createNewProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.data,
            };

        case CREATE_PRODUCT_FAIL:
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
 * ====== Get One Product Reducer ======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const oneProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case ONE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ONE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.data,
            };

        case ONE_PRODUCT_FAIL:
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
 * ====== Update Product Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const updateProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                updated: action.payload.success,
                product: action.payload.data,
            };

        case UPDATE_PRODUCT_FAIL:
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
 * ====== Delete Product Reducer =======
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const deleteProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                deleted: action.payload.success,
                product: action.payload.data,
            };

        case DELETE_PRODUCT_FAIL:
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