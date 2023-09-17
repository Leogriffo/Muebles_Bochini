import React from "react";
import "../Inicio/Inicio.css"
import fondo from "../../img/fondo_inicio.png"
const Inicio = () => {
    return(
        <div className="fondo">
            <img src={fondo} alt=""></img>
            <h1 className="titulo">MUEBLES BOCHINI</h1>
            <h2 className="subtitulo">En Muebles Bochini nos preocupamos por el confort, la estética y la belleza de su lugar. </h2>
        </div>
    )
}

export default Inicio