import React, { useState } from "react";
import Formulario from "./components/template/Formulario/Formulario"
import BuscaBovino from "./components/template/BuscaBovino/BuscaBovino";
import { calcularProximoParto } from "./components/template/Utils/utils";


function Api() {
  const [bovinos, setBovinos] = useState([]);

  return (
    <div>
      <Formulario bovinos={bovinos} setBovinos={setBovinos} />
      <BuscaBovino bovinos={bovinos} calcularProximoParto={calcularProximoParto} />
      </div>
  )
}

export default Api;