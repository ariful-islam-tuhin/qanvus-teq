import React from 'react';
import Slick from '../../Component/Slick/Slick';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {

  return (
    <div className='banner'>

<br />
<br />
      <Typewriter 
        options={{
          strings: [

            "Welcome to our website",
                  
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}

      />
      <br />    

      <Slick></Slick>


    </div>
  );
};

export default Banner;