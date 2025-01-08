import React from "react";


function Privatepage({ Children }) {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    window.location.href = "/Login";
  } else
  {
    return Children;
  }
}

export default Privatepage;