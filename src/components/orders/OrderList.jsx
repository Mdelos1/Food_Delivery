import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import master from '../../assets/imgs/png/Master card.png';
import paypal from '../../assets/imgs/png/Pay pal.png';
import cash from '../../assets/imgs/png/Cash.png';
import address from '../../assets/imgs/png/SvgDirection.png';
import { useNavigate, useParams } from 'react-router-dom';
import app from '../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';

const OrderList = () => {

  const price = useSelector(state => state.priceOrder);
  const { id } = useParams();

  const navigate = useNavigate();
  const db = getFirestore(app)
  const [menu, setMenu] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        setMenu(docs[0].menus[id-1]);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])

  const postOrderVaucher = async() => {
    navigate("/Home/OrderList/Follow");

    // try {
    //   await addDoc(collection(db, 'voucher'), {

    //   })
    // } catch (error) {
    //   throw(error)
    // }
  }
  
  const delivery = 4
  const total = Number(price[0]) + delivery

  return (
    <div className='orderList'>
      <h3 className='orderList__h3'>New order</h3>
      <div className='orderList__address--text'>
        <p>Delicer to</p>
        <div className='orderList__address'>
          <img src={address} alt="" />
          <p>882 Well St, New-York</p>
        </div>
      </div>
      <div className='orderList__imgs'>
        <img src={cash} alt="" />
        <img src={master} alt="" />
        <img src={paypal} alt="" />
      </div>
      <div className='orderList__info'>
        <div className='orderList__info--img' style={{backgroundImage: `url(${menu?.img})`}}></div>
        <p>{price[1]}</p>
        <p>{menu?.name}</p>
        <b>$ {price[0]}</b>
      </div>
      <div className='orderList__note'>
        <p>Note</p>
        <input type="text" placeholder='Write something' name="note" id="note" />
      </div>
      <div className='orderList__compra'>
        <div>
          <p>Products</p>
          <p>{price[0]}$</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>{delivery}$</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>{total}$</p>
        </div>
      </div>
      <div className='orderList__btn'>
        <button onClick={() => postOrderVaucher()}>Order</button>
      </div>
    </div>
  )
}

export default OrderList;