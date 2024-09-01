import { useState } from "react";

function Estado() {
  //ESTADO  
  const [num, setNum] = useState(0); //Integers, String, Etc

  const sumar = () => {
    setNum(num + 1);
  }

  return (
    <div className="App">
      <button onClick={sumar}>SUMAR</button>
      <p>{num}</p>
    </div>
  )
}

export default Estado;
