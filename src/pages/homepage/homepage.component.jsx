import React from "react";

import ShopPage from "../shop/shop.component";

import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";

const HomePage = (props) => (
  <div className="homepage">
    <Directory />
    <ShopPage />
  </div>
);

export default HomePage;
