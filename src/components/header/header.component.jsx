import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>

      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

// Duyệt qua tất cả state trong root-reducer để lấy state cần cho component đang xét. 
// Ở đây ta cần 2 state là user và cart. rename là currentUser và hidden.
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
