import React, { useEffect, useState } from 'react';
import img_ubicacion from '../../../assets/imgs/svg/Ubicacion.svg';
import img_Cupon1 from '../../../assets/imgs/svg/Cupon1.svg';
import img_Cupon2 from '../../../assets/imgs/svg/Cupon2.svg';
import img_Categoria1 from '../../../assets/imgs/svg/Categoria1.svg';
import img_Categoria2 from '../../../assets/imgs/svg/Categoria2.svg';
import img_Categoria3 from '../../../assets/imgs/svg/Categoria3.svg';

import { useNavigate } from 'react-router-dom';
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
import Footer from '../footer/Footer'; 


const HomePagina = () => {
  const navigate = useNavigate();
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
        setLista(docs);
      } catch (error) {
        throw error;
      }
    }
    getStore();
  }, [])
  console.log(lista)

  return (
    <div className='home'>
      <div className='home__container'>
        <div className='topHome' onClick={() => navigate("/Home/ManageAddress")}>
          <img src={img_ubicacion} alt="" className='img_ubicacion' />
          <div className='home__container--address'>
            <p>DELIVER TO</p>
            <p>Medellín, Antioquia</p>
          </div>
        </div>
        <div>
          <div className='cupones'>
            <img src={img_Cupon1} alt="" className='img_Cupon1' />
            <img src={img_Cupon2} alt="" className='img_Cupon2' />
          </div>
        </div>
        <div>
          <p>Restaurants and cafes</p>
          <br />
          <div className='categorias'>
            <img src={img_Categoria1} alt="" className='img_Categoria1' />
            <img src={img_Categoria2} alt="" className='img_Categoria2' />
            <img src={img_Categoria3} alt="" className='img_Categoria3' />
          </div>
        </div>
        <div>
          {
            lista?.map(list => (
              <div key={list.id} className='home__restaurantes' onClick={() => navigate(`/Home/RestaurantPage/${list.id}`)}>
                <img src={list.image} alt={list.name} className='img_restaurante' />
                <div className='home__restaurantes--text'>
                  <p>{list.name}</p>
                  <img src={list.stars} alt="stars" className='img_calificacion'/>
                  <p>Work time {list.workTimeStart} - {list.workTimeFinalice}</p>
                  <p>Before you {list.beforeYou}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default HomePagina;

