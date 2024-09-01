/* eslint-disable react/prop-types */
export const Buscador = ({onSubmit, valorInput, onChange}) => {
  return (
    <form className='form' onSubmit={onSubmit}>
        <input className='buscador' value={valorInput} onChange={onChange}/>
    </form>
  )
}
