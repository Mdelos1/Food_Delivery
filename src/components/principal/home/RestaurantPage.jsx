import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img_Categoria1 from '../../../assets/imgs/svg/Categoria1.svg';
import img_Categoria2 from '../../../assets/imgs/svg/Categoria2.svg';
import img_Categoria3 from '../../../assets/imgs/svg/Categoria3.svg';
import app from '../../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
} from 'firebase/firestore';

const RestaurantPage = ({product}) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const db = getFirestore(app)
  const [lista, setLista] = useState();

  useEffect(() => {
    const getStore = async() => {
      try {
        const consulta = await getDocs(collection(db, 'stores'))
        const docs = []
        consulta.forEach(doc => {
          docs.push({...doc.data(), id:doc.id})
        }) 
        docs?.forEach(li => {
          if (li.id === id) {
            setLista(li)
          }
        });
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])

  
  return (
    <div className='restaurantPage'>
      <div className='restaurantPage__description'>
        <div className='restaurantPage__description--btn' onClick={() => navigate(-1)}>
          <p><i class="fa-solid fa-arrow-left"></i></p>
        </div>
        <div className='restaurantPage__description--logo'>
          <img src={lista?.imgLogo} alt={"logo"} style={{padding: "2rem 0"}}/>
        </div>
        <div className='restaurantPage__description--text'>
          <img src={lista?.image} alt="" />
          <div>
            <p>{lista?.name}</p>
            <p>{lista?.description}</p>
            <div className='restaurantPage__description--stars'>
              <img src={lista?.stars} alt="stars" />
              <p className='restaurantPage__description--time'>{lista?.menus?.[0].time}</p>
            </div>
          </div>
        </div>
        <br />
        <div className='categorias'>
          <img src={img_Categoria1} alt="" className='img_Categoria1' />
          <img src={img_Categoria2} alt="" className='img_Categoria2' />
          <img src={img_Categoria3} alt="" className='img_Categoria3' />
        </div>
      </div>
      <div className='restaurantPage__menu'>
        {
          lista?.menus?.map((menu, i) => (
            <div key={menu.img} onClick={() => product(id)}>
              <div 
                onClick={() => navigate(`/Home/RestaurantPage/${id}/product/${i+1}`)}
                className='restaurantPage__menu--container'
              >
                <img src={menu.img} alt={menu.name} className='restaurantPage__menu--img'/>
                <div>
                  <p>{menu.name}</p>
                  <p>{menu.price}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
</div>
  )
}

export default RestaurantPage
