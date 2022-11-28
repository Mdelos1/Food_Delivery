import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

import img_restaurantRecent from '../../../assets/imgs/png/Maskgroup.png';
import flecha_derecha from '../../../assets/imgs/png/flecha_derecha.png';

const OrderHistory = () => {
  const navigate = useNavigate();
  return (
    <div className='orderHistory'>
      <p className='title_recentOrders'>All orders</p>
      <div className='orderHistory__container'>
        <img src={img_restaurantRecent} alt="" className='img_restaurantRecent' />
        <div className='info_recentRest'>
          <p>Pardes restaurant</p>
          <p>$ 132.00</p>
        </div>
        <img src={flecha_derecha} alt="" className='flecha_derecha2' />
      </div>
      <div className='orderHistory__container'>
        <img src={img_restaurantRecent} alt="" className='img_restaurantRecent' />
        <div className='info_recentRest'>
          <p>Pardes restaurant</p>
          <p>$ 132.00</p>
        </div>
        <img src={flecha_derecha} alt="" className='flecha_derecha2' />
      </div>
      <div className='orderHistory__container'>
        <img src={img_restaurantRecent} alt="" className='img_restaurantRecent' />
        <div className='info_recentRest'>
          <p>Pardes restaurant</p>
          <p>$ 132.00</p>
        </div>
        <img src={flecha_derecha} alt="" className='flecha_derecha2' />
      </div>
      <div className='footer1'>
        <Footer />
      </div>
    </div>
  )
}

export default OrderHistory
