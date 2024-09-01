import { useState } from "react";

export const useSearchGifs = () => {
    const [valorInput, setValorInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(false);
  
    //Valor de la busqueda
    const onChange = (e) => {
      const valor = e.target.value;
      setValorInput(valor);
    }
  
    //Metodo de obtencion
    const getGifs = async (query) => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=aCsFMoUfb9qPlpZ9P2Ewjac0x0UwXJyz&q=${query}&limit=200`;
      setCargando(true);
      //#region PROMESA DE ESPERA 1 SEGUNDOS
      await new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
      })
      //#endregion
      const response = await fetch(url);
      const data = await response.json();
      setCargando(false);
      return data.data;
    }
  
    //Manejo del evento onSubmit del formulario
    const onSubmit = async (evento) => {
      evento.preventDefault()
      const gifs = await getGifs(valorInput)
      setGifs(gifs);
    }

    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
        cargando
    }
}
