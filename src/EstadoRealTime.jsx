import { useState } from "react";

function EstadoRealTime() {
  //Estado
  const [valorInput, setValorInput] = useState('');

  //Muestra en tiempo real lo que se esta teniendo de valor en el target
  const onChange = (e) => {
    const valor = e.target.value;
    setValorInput(valor);
  }

  return (
    <div className="App">
      <input value={valorInput} onChange={evento => onChange(evento)}/>
      <p>{valorInput}</p>
    </div>
  )
}

export default EstadoRealTime;
