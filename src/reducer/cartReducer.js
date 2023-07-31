export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
        case REMOVE_FROM_CART:
            return { ...state, cartList: payload.products }; 
        case UPDATE_TOTAL:
            return { ...state, total: payload.total };
        default:
            throw new Error(`No case found in cartReducer for type=${type}`);
    }
}