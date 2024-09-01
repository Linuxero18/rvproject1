/* eslint-disable react/prop-types */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = { 
  initial: {
    opacity: 0, scale: 0
  },
  animate: ({index}) => ({
    opacity: 1,
    scale: 1, 
    transition:{
      duration: 0.5,
      delay: index*.1
    }
  })
}


export const Gif = ({gif, index}) => {

  const ref = useRef(null)
  //Manejo de visto
  const estaVisto = useInView(ref, {
    once: true
  })


  return (
    <motion.img
      drag // ARRASTRA LA IMAGEN
      ref={ref}
      initial = "initial"
      animate = { estaVisto ? "animate" : "" }
      variants = {variants}
      custom = {{ index }}
      whileHover = {{
        scale: 1.1
      }}
      className='gif' 
      src={gif.images.original.url} 
      alt={gif.title}
    />
  )
}
