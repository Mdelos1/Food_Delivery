import React from 'react'
import flecha_atras from '../../../assets/imgs/png/flecha_atras.png';
import lapiz_editar from '../../../assets/imgs/png/lapizeditar.png';


const ProfileEdit = () => {
  return (
    <div className='profileEdit'>
        <div className='title_profileEdit'>
            <img src={flecha_atras} alt="" className='flecha_atras1' />
            <p>Profile</p>
        </div>
        <div className='container_profileEdit'>
            <div className='info_profileEdit'>
                <p>Mateo De Los Rios</p>
                <img src={lapiz_editar} alt="" className='lapiz_editar' />
            </div>
        </div>
        <div className='container_profileEdit'>
            <div className='info_profileEdit'>
                <p>mateodelosrios@gmail.com</p>
                <img src={lapiz_editar} alt="" className='lapiz_editar' />
            </div>
        </div>
        <div className='container_profileEdit'>
            <div className='info_profileEdit'>
                <p>350 500 92 54</p>
                <img src={lapiz_editar} alt="" className='lapiz_editar' />
            </div>
            <button className='btn_save'>Save</button>
        </div>
        
    </div>
  )
}

export default ProfileEdit