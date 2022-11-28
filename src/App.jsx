import React, { useState, useEffect } from "react";
// import env from "react-dotenv";
import { HashRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader/Loader';
import SlicePagina from './components/carrusel/SlicePagina';
import HomePagina from './components/principal/home/Home';
import SearchPage from './components/principal/search/Search';
import RestaurantPage from './components/principal/home/RestaurantPage';
import ManageAddress from './components/principal/home/ManageAddress';
import OrderHistory from './components/principal/ordersHistory/OrderHistory';
import Profile from './components/principal/profile/Profile';
import ProfileEdit from './components/principal/profile/ProfileEdit';

import ProductPage from './components/principal/home/ProductPage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import Register from "./components/autenticación/Register";
import PrivateRouter from "./components/routes/PrivateRouter";
import PublicRouter from "./components/routes/PublicRouter";

import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "./redux/actions/userActions";
import Login from "./components/autenticación/Login";
import OrderList from "./components/orders/OrderList";
import OrderFinaly from "./components/orders/OrderFinaly";
import HomeAdministrator from "./components/homeAdmin/HomeAdministrator";
import AddNewRestaurant from "./components/homeAdmin/createRestaurant/AddNewRestaurant";
import DeleteRestaurant from "./components/homeAdmin/deleteRestaurant/DeleteRestaurant";



function App() {
  const [time, setTime] = useState(false);

  setTimeout(() => {
    setTime(true)
  }, 4000)


  const [id, setId] = useState(0);
  const product = (id) => {
    setId(id);
    
  }

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const dispatch = useDispatch()

  const userStore = useSelector((store) => store.userStore);
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      if (Object.entries(userStore).length === 0) {
        const {
          displayName,
          email,
          phoneNumber,
          accessToken,
          photoURL,
          uid,
        } = user?.auth.currentUser;
        dispatch(
          actionLoginSync({
            name: displayName,
            email,
            accessToken,
            phoneNumber,
            avatar: photoURL,
            uid,
            error: false,
          })
        );
      }

    }

    );
  }, [setIsLoggedIn, dispatch, userStore]);
    // console.log(window.env?.ADMIN)
    const home = () => {
      if (
        auth.lastNotifiedUid === "sMsPH8ogrFc2HYDFDph9x742fZA2" 
        // || auth.lastNotifiedUid === "1sC7REb1ZBYWL3lb4jVDtna7y072"
      ){
        return <HomeAdministrator />
      }else{
        return <HomePagina />
      }
    }
    

  return (
    <HashRouter>
      <>
      {
        time ? (
          <div className="App">
            <Routes>

              <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
                
                <Route path='/Home' element={home()}/>
                <Route path='/Search' element={<SearchPage/>}/>
                <Route path='/OrderHistory' element={<OrderHistory />}/>
                <Route path='/Profile' element={<Profile />}/>
                <Route path='/Home/ProfileEdit' element={<ProfileEdit />}/>

                <Route path="/Home/OrderList/:id" element={<OrderList />}/>
                <Route path="/Home/OrderList/Follow" element={<OrderFinaly />}/>

                <Route path='/Home/RestaurantPage/:id' element={<RestaurantPage product={product}/>}/>
                <Route path='/Home/RestaurantPage/:id/product/:id' element={<ProductPage idArray={id}/>}/>
                <Route path='/Home/ManageAddress' element={<ManageAddress />}/>

                <Route path="/Home/create" element={<AddNewRestaurant />}/>
                <Route path="/Home/delete" element={<DeleteRestaurant />}/>
              </Route>

              <Route path='/' element={<SlicePagina />}/>

            </Routes>

          </div>
        ) : (
          <Loader />
        )
      }
      </>
      </HashRouter>
  )
}

export default App

