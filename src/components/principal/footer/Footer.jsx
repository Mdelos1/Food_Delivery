import React from 'react'
import img_SlideHome from '../../../assets/imgs/svg/Slide_home.svg';
import img_SlideSearch from '../../../assets/imgs/svg/Slide_search.svg';
import img_SlideTime from '../../../assets/imgs/svg/Slide_time.svg';
import img_SlideProfile from '../../../assets/imgs/svg/Slide_profile.svg';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='footer__container'>
        <img src={img_SlideHome} alt="" className='img_SlideHome' onClick={() => navigate("/Home")}/>
        <img src={img_SlideSearch} alt="" className='img_SlideSearch' onClick={() => navigate("/Search")}/>
        <img src={img_SlideTime} alt="" className='img_SlideTime' onClick={() => navigate("/OrderHistory")}/>
        <img src={img_SlideProfile} alt="" className='img_SlideProfile' onClick={() => navigate("/Profile")}/>
      </div>
    </>
  )
}

export default Footer
