import { useState } from "react";

function EstadoAsincrono() {

  const [counter, setCounter] = useState(0)

  //Se recomienda usarlo de esta manera ya que es un proceso asincrono 
  const onClick = () => {
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={onClick}>AGREGAR 2 +</button>
    </div>
  )
}


export default EstadoAsincrono; 
