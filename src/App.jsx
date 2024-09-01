import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";
import './estilosHooks.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Estado from "./Estado";
import EstadoRealTime from "./EstadoRealTime";
import EstadoAsincrono from "./EstadoAsincrono";
import ArrayList from "./ArrayList";



function App() {
  const {valorInput, gifs, onChange, onSubmit, cargando} = useSearchGifs();

  return (
    <Router>
      <div className="App">
        <Buscador
          valorInput={valorInput}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <nav>
            <ul className="container">
              <li className="row">
                <div className="col">
                  <Link to="/estado">Estado</Link>
                </div>
              </li>
              <li className="row">
                <div className="col">
                  <Link to="/estadoEnTiempoReal">Estado En Tiempo Real</Link>
                </div>
              </li>
              <li className="row">
                <div className="col">
                  <Link to="/estadoAsincrono">Estado Asincrono</Link>
                </div>
              </li>
              <li className="row">
                <div className="col">
                  <Link to="/arrayList">Array</Link>
                </div>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/"/>
            <Route path="/estado" element={<Estado/>} />
            <Route path="/estadoEnTiempoReal" element={<EstadoRealTime/>} />
            <Route path="/estadoAsincrono" element={<EstadoAsincrono/>} />
            <Route path="/arrayList" element={<ArrayList/>}/>
          </Routes>
        {
          cargando ? <h3>Cargando ...</h3> : 
            <GridGifs
              gifs={gifs}
            />
        }
      </div>
    </Router>
  )
}

export default App;
