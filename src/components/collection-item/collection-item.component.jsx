import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* Gọi addItem(item) với item chúng ta đang click */}
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  );
};

// Hàm định nghĩa hành động cho addItem để tương ứng với hành động trong file actions.
// Trong trường hợp này nó nhận về thuộc tính addItem với cartItem sẽ là item mà chúng ta thêm.
const mapDispatchToProps = (dispatch) => ({
  // Hàm truyền hành động vào reducer tương ứng để nhận lại thuộc tính cần cho component của chúng ta.
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
