import React from 'react'
import { useNavigate } from 'react-router-dom';
import exito from '../../assets/imgs/png/SvgExit.png';

const OrderFinaly = () => {
  const navigate = useNavigate();

  return (
    <div className='orderFinaly'>
      <div>
        <h3>Order is Acepted</h3>
        <img src={exito} alt="" />
      </div>
      <div className='orderFinaly__btn'>
        <button onClick={() => navigate("/Home")}>Follow Order</button>
      </div>
    </div>
  )
}

export default OrderFinaly
