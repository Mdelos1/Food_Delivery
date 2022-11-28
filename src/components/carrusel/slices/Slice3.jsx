import React from 'react';
import Imgslide3 from '../../../assets/imgs/svg/Svg2.svg';
import img_slice3 from '../../../assets/imgs/svg/Slide3.svg';


const Slice3 = () => {
  return (
    <div className='slice'>
      <img src={Imgslide3} alt="" className='Imgslide' />
      <p className='title_slice'>We will deliver as soon as possible</p>
      <img src={img_slice3} alt="" className='img_slice' />
    </div>
  )
}

export default Slice3;
