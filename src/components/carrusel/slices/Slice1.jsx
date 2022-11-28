import React from 'react';
import imgSlice1 from '../../../assets/imgs/svg/Svg0.svg';
import img_slice1 from '../../../assets/imgs/svg/Slide1.svg';



const Slice1 = () => {
  return (
    <div className='slice'>
      <img src={imgSlice1} className='imgSlice' />
      <p className='title_slice'>Choose what to eat choosing from <br/> a variety of restaurants from the list</p>
      <img src={img_slice1} alt="" className='img_slice' />
    </div>
  )
}

export default Slice1;
