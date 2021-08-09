import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";

const HomePage = (props) => (
  <div className="homepage">
    {console.log(props.history)}
    {console.log(props.match)}
    {console.log(props.location)}
    <Directory />
  </div>
);

export default HomePage;
