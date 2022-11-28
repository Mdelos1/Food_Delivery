import React from 'react'
import Flecha_atras from '../../../assets/imgs/png/flecha_atras.png'
import Img_Basura from '../../../assets/imgs/svg/Basura.svg'

const ManageAddress = () => {
  return (
    <>
        <div>
            <img src={Flecha_atras} alt="" className='flecha_atras' />
            <p>Manage adresses</p>
        </div>
        <div>
            <input placeholder='Adress1'></input>
            <img src={Img_Basura} alt="" className='Img_Basura' />
        </div>
        <div>
            <input placeholder='Adress2'></input>
            <img src={Img_Basura} alt="" className='Img_Basura' />
        </div>
        <div>
            <input placeholder='Adress3'></input>
            <img src={Img_Basura} alt="" className='Img_Basura' />
        </div>
    </>
  )
}

export default ManageAddress
