import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div className="heading">
        Company Employee Directory
    </div>
      <br></br>
      <div className="sub-heading">
        Click on Name/DOB to sort or use search box to narrow your results
    </div>
    </div>

  );
}

export default Header;