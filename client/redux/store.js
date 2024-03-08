import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    allProductsReducer, 
    createNewProductReducer, 
    oneProductReducer, 
    updateProductReducer,
    deleteProductReducer,
} from '@/redux/reducers/productReducers';

import {
    allPackagesReducer,
    createNewPackageReducer,
    onePackageReducer,
    updatePackageReducer,
    deletePackageReducer
} from '@/redux/reducers/packageReducers';

import { allUsersReducer, updateUserReducer, oneUserReducer, deleteUserReducer } from '@/redux/reducers/userReducers';
import { cartReducer } from '@/redux/reducers/cartReducers';
import { authLoginReducer, authRegisterReducer, adminAuthReducer } from '@/redux/reducers/authReducers';


const reducer = combineReducers({
    products: allProductsReducer,
    newProduct: createNewProductReducer,
    product: oneProductReducer,
    updatedProduct: updateProductReducer,
    deletedProduct: deleteProductReducer,

    packages: allPackagesReducer,
    newPackage: createNewPackageReducer,
    packageReq: onePackageReducer,
    updatedPackage: updatePackageReducer,
    deletedPackage: deletePackageReducer,

    users: allUsersReducer,
    user: oneUserReducer,
    updatedUser: updateUserReducer,
    deletedUser: deleteUserReducer,

    cart: cartReducer,

    login: authLoginReducer,
    register: authRegisterReducer,
    adminLogin: adminAuthReducer
});

const initialState = {
    carts: {
        cartsItems: typeof window !== 'undefined' && localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;