import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import { initialState } from "./initialState";

const remove = (state: any, product: any) => {
  const updatedCart: any = state.filter(
    (productInCart: any) => productInCart.id !== product.id);
  return updatedCart;
};

const customerReducer = (state = initialState.cart, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return remove(state, action.payload);
    default:
      return state;
  }
};

export default customerReducer;
