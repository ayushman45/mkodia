import React from 'react';
import mkOdiaBanner from '../assets/mkodia-banner.jpg'

const contentStyle = {
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => (
    <div id='carousel'>
      <img src={mkOdiaBanner} width={"100%"}/>
    </div>
);
export default Carousels;