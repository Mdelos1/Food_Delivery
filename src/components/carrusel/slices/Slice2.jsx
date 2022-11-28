import React from 'react'
import Imgslide2 from '../../../assets/imgs/svg/Svg1.svg';
import img_slice1 from '../../../assets/imgs/svg/Slide2.svg';

const Slice2 = () => {
  return (
    <div className='slice'>
      <img src={Imgslide2} alt="" className='Imgslide' />
      <p className='title_slice'>Choose where you want to deliver <br/> by indicating on the map</p>
      <img src={img_slice1} alt="" className='img_slice' />
    </div>
  )
}

export default Slice2;
