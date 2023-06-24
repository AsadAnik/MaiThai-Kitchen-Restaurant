import { ADD_TO_CART, REMOVE_TO_CART, SAVE_SHIPPING_INFO } from '@/redux/constants/cartConstants';

/**
 * ====== Cart Reducer ======
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){

        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find(i => i.productId === item.productId);

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.productId === isItemExist.productId ? item : i),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case REMOVE_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.productId !== action.payload),
            };

        case SAVE_SHIPPING_INFO:
            return {};

        default:
            return state;
    }
};