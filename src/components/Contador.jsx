import { React, useState } from "react";

const Contador = () => {
  const [numero, setCont] = useState(0);

  function contar(operador) {
    if (operador == "+") {
      setCont(numero + 1);
    } else {
      setCont(numero - 1);
    }
  }

  return (
    <div>
      <p>Cantidad: {numero} </p>

      <button onClick={() => contar("+")}>+</button>
      <button onClick={() => contar("-")}>-</button>
    </div>
  );
};

export default Contador;
