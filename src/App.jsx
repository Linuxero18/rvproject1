import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";

function App() {
  
  const {valorInput, gifs, onChange, onSubmit, cargando} = useSearchGifs();

  return (
    <div className="App">
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {
        cargando ? <h3>Cargando ...</h3> : 
          <GridGifs
            gifs={gifs}
          />
      }
    </div>
  )
}

export default App;
