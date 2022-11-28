import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slice1 from './slices/Slice1'
import Slice2 from './slices/Slice2'
import Slice3 from './slices/Slice3'

const SlicePagina = () => {
  const [numero, setNumero] = useState(1)
  const navigate = useNavigate();
  useEffect(() => {
    if (numero > 3) {
      navigate("/login")
    }
  }, [numero])

  const carrusel = () => {
    if (numero === 1) {
      return <Slice1 />
    } else if (numero === 2) {
      return <Slice2 />
    }else if (numero === 3){
      return <Slice3 />
    }
  }
  return (
    <div>
      <div>
        {carrusel()}
      </div>
      <div className='slice__btn'>
        <button className='butonSlice' onClick={() => setNumero(numero+1)}>Next</button>
      </div>
    </div>
  )
}

export default SlicePagina
