import React from "react";
import notFoundImg from "../assets/img/404-error.png"

function NotFound() {
  const pageNotFound = notFoundImg;
  return (
    <div className="customFlexContainer">
      <h1>La ruta ingresada no existe</h1>
      <p>verifica que el url ingresado este correcto</p>
      <img src={pageNotFound} className="customImgHome"/>
    </div>
  );
}

export default NotFound;