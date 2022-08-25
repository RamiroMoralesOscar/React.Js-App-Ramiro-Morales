import React from "react";
import producto from "../img/auriculares.png";
import Contador from "./ItemCount";
import "../styles/Tarjeta.css";

const TarjetaProducto = () => {
  return (
    <div className="producto">
      <img src={producto} alt="Auriculares Xiaomi" />
      <div className="informacion">
        <span className="precio">$ 2.900</span>
        <span className="descripcion">Auriculares inalámbricos Xiaomi</span>
        <span className="stock">ULTIMAS 10 UNIDADES DISPONIBLES</span>
        <div>
          <Contador />
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
