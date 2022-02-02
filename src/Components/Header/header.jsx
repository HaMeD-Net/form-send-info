import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/home" style={{margin: "0 20px"}}>Home</Link>
      <Link to="/showform">Show form</Link>
    </div>
  );
}
