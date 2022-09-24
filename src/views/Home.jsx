import React from "react";
import cake from "../assets/img/cake.png"

function Home() {
  const cakeImg = cake;
  return (
    <div className="customFlexContainer">
          <h1>Bienvenido a Happy Cake</h1>
          <img variant="top" src={cakeImg} alt="dibujo de un pastel con una frutilla en la parte superior de color que asimila al chocolate y una franja roja en medio" className="customImgHome"/>
    </div>
  );
}

export default Home;