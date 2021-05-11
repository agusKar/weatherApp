import React, {useState} from 'react';
import Error from './Error';


const Formulario = ({datos, guardarDatos, guardarConsultar}) => {

    const [ error, guardarError ] = useState(false);

    const handleChanges = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const {ciudad, pais} = datos;

    const handleSubmit = e => {
        e.preventDefault();

        // Validar datos
        if(ciudad.trim() === '' || pais.trim() === '' || pais.trim() === 'select'){
            guardarError(true);
            return;
        }
        guardarError(false);

        // Enviar a componente principal
        guardarConsultar(true);
    }

    return ( 
        <form 
            onSubmit={handleSubmit}>
                {
                    error ? <Error titulo="Todos los campos son obligatorios"/> : null
                }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChanges}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChanges}>
                        <option value="">-- Seleccione un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
     );
}
 
export default Formulario;