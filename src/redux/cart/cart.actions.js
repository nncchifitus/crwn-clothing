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

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
  // Payload là item chúng ta muốn loại khỏi cartItems array
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
  // Payload là item chúng ta muốn loại khỏi cartItems array
});

export const increaseQuantityItem = (item) => ({
  type: CartActionTypes.INCREASE_QUANTITY_ITEM,
  payload: item,
  // Payload là item chúng ta muốn tăng số lượng cartItems array
});

export const decreaseQuantityItem = (item) => ({
  type: CartActionTypes.DECREASE_QUANTITY_ITEM,
  payload: item,
  // Payload là item chúng ta muốn giảm số lượng cartItems array
});
