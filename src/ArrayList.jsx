import 'bootstrap/dist/css/bootstrap.min.css';

const nombre = "Piter"

const list = [
  'Ana',
  'Pablo',
  'Pedro',
  'Juan'
]


function ArrayList() {
  const items = [];
  const items2 = [];
  const items3 = [];

  //FOR
  for (let i = 0; i < list.length; i++){
    items.push(
      <p key={i}>Nombre {i+1}: {list[i]}</p>
    );
  }

  //FOREACH
  list.forEach((n,i)=>{
    items2.push(
      <p key={n}>Nombre {i+1}: {list[i]}</p>
    );
  })

  //FOR OF
  let i = 0;
  for (const n of list) {
    items3.push(
      <p key={i++}>Nombre {i+1}: {n}</p>
    )
  }

  //REDUCE
  const items4 = list.reduce((nombre, n, i) => {
    nombre.push(
      <p key={i}>Nombre {i+1}: {n}</p>
    );
    return nombre;
  }, []);

  //MAP
  const items5 = list.map((nombre, i) => {
    return <p key={i}>Nombre {i+1}: {nombre}</p>
  })

  return (
    <div>
      <div className='titulo'>
        <hr/>
        <h2>HOLA MUNDO DICE {nombre.toUpperCase()}</h2>
        <hr/>
      </div>
      <br />
      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <p><h4>Recorriendo un array con map (agregando a un array)</h4></p>
            {list.map((n,i) =>(
              <p key={i}>Nombre {i+1}: {n}</p>
            ))}
          </div>
          <div className="col">
            <p><h4>Recorriendo un array con for</h4></p>
            {items}
          </div>
          <div className="col">
            <p><h4>Recorriendo un array con forEach</h4></p>
            {items2}
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <p><h4>Recorriendo un array con for of</h4></p>
            {items3}
          </div>
          <div className="col">
            <p><h4>Recorriendo un array con reduce</h4></p>
            {items4}
          </div>
          <div className="col">
            <p><h4>Recorriendo un array con map (retornando a un array)</h4></p>
            {items5}
          </div>
        </div>
      </div>
    </div>
  )
}


export default ArrayList;