import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [datos, guardarDatos] = useState({
    ciudad:"",
    pais:""
  });
  const {ciudad, pais} = datos;

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  const [error, guardarError] = useState(false);

  useEffect(() => {

    if(consultar){
      const consultarApi = async () =>{
        const apiKey = "346efa09ba2f8371bed9f683256dc306";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
  
        const api = await fetch(url);
        const resultadoApi = await api.json();

        guardarResultado(resultadoApi);
        guardarConsultar(false);
        if(resultadoApi.cod === '404'){
          guardarError(true);
        }
      }
      consultarApi();
    }

  },[consultar]);

  let componente;
  if(error){
    componente = <Error titulo="No se encontraron resultados."/>;
  }else{
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <div className="container-fluid">
          <Header 
            titulo="Clima React App"
          />
        <div className="row light-blue darken-1">
          <div className="col s6">
            <Formulario 
              datos={datos}
              guardarDatos={guardarDatos}
              guardarConsultar={guardarConsultar}
            />
          </div>
          <div className="col s6">
              {componente}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
