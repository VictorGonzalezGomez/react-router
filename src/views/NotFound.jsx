import React from "react";
import notFoundImg from "../assets/img/404-error.png"

function NotFound() {
  const pageNotFound = notFoundImg;
  return (
    <div className="customFlexContainer">
      <h1>La ruta ingresada no existe</h1>
      <p>verifica que el url ingresado este correcto</p>
      <img src={pageNotFound} alt="dibujo de error 404 en una pag con un rectangulo naranja con los numeros del error al centro, triangulo amarillo y signo de exclamacion en la parte baja en el centro " className="customImgHome"/>
    </div>
  );
}

export default NotFound;