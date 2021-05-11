import React from 'react';


const Clima = ({resultado}) => {
    const { name, main} = resultado;

    if(!name) return null;

    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col-s12">
            <h2>La temperatura de {name} es: </h2>
            <p className="temperatura">{parseFloat(main.temp - kelvin).toFixed(2)} &#x2103;</p>
            <p>Máx: {parseFloat(main.temp_max - kelvin).toFixed(2)} &#x2103;</p>
            <p>Mín: {parseFloat(main.temp_min - kelvin).toFixed(2)} &#x2103;</p>
        </div>
     );
}
 
export default Clima;