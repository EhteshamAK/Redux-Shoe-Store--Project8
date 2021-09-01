import * as types from './actionTypes';

export const addProductToCart = (product: any) => (dispatch: any) => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: product,
    });
};

export const removeFromCart = (product: any) => (dispatch: any) => {
    console.log('action', product);
    dispatch({
        type: types.REMOVE_FROM_CART,
        payload: product,
    });
};