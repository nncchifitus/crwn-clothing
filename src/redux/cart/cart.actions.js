import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  // payload có thể là bất cứ thứ gì chúng ta muốn.
  // Trong trường hợp này nó là item chúng ta muốn thêm vào cartItems array
  payload: item,
});
