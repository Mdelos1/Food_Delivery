import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer';

import img_usuario from '../../../assets/imgs/png/usuario.png';
import flecha_derecha from '../../../assets/imgs/png/flecha_derecha.png';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useDispatch, useSelector } from 'react-redux';
import { actionLogoutAsync } from "../../../redux/actions/userActions";

const Profile = () => {

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };

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
  console.log(info)


  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__container--img'>
          <div className='img' style={{backgroundImage: `url(${info.photoURL})`}}></div>
          <p>{info.displayName}</p>
        </div>
        <div className='info_profile'>
          <img src={img_usuario} alt="" className='img_usuario' />
          <p>Account edit</p>
          <img src={flecha_derecha} alt="" className='flecha_derecha' />
        </div>
        <div>
          <button className='btn_logout' onClick={logOut}>Logout</button>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Profile
