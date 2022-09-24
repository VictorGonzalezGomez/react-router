import React from "react";
import cake from "../assets/img/cake.png"

function Home() {
  const cakeImg = cake;
  return (
    <div className="customFlexContainer">
          <h1>Bienvenido a Happy Cake</h1>
          <img variant="top" src={cakeImg} className="customImgHome"/>
    </div>
  );
}

export default Home;