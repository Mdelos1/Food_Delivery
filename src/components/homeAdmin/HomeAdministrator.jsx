import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import app from '../../firebase/firebaseConfig';
import { 
  getFirestore, 
  collection,
  getDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  setDoc,
} from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector } from 'react-redux';



const HomeAdministrator = () => {
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
  
  const userStore = useSelector((store) => store.userStore);

  const [info, setInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const {
        displayName,
        email,
        phoneNumber,
        photoURL,
      } = user?.auth.currentUser;
      setInfo({displayName, email, phoneNumber, photoURL})
    });
    
  }, [userStore]);
  // console.log(info)

  return (
    <div className='homeAdmin'> 
      <h2>Settings</h2>
      <div className='homeAdmin__img'>
        <div className='imgUserAdmin' style={{backgroundImage: `url(${info.photoURL})`}}></div>
        <p>{info.displayName}</p>
      </div>
      <div className='homeAdmin__btn'>
        <button className='createRestaurant' onClick={() => navigate("/Home/create")}>Create new restaurant</button>
      </div>
      <div className='homeAdmin__btn'>
        <button className='createRestaurant' onClick={() => navigate("/Home/delete")}>Delete restaurant</button>
      </div>
    </div>
  )
}

export default HomeAdministrator;