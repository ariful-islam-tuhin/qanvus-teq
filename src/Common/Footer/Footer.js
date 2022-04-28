import React from 'react';
import { FaFacebookSquare, FaGoogle, FaTwitter, FaYahoo } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row col-lg-12'>
                <h4>follow us</h4>
                <div className='col-lg-3'>


                </div>
                <div className='col-lg-3'>
                    <span> <FaGoogle style={{ color: '#ffffff', fontSize: '27px', backroundColor: 'red', borderRight: '2px solid green' }} /> </span>
                    <span> <FaTwitter style={{ color: '#ffffff', fontSize: '27px', backroundColor: 'red', borderRight: '2px solid green' }} /> </span>

                </div>
                <div className='col-lg-3'>
                    <span> <FaFacebookSquare style={{ color: '#ffffff', fontSize: '27px', backroundColor: 'red', borderRight: '2px solid green' }} /> </span>
                    <span> <FaYahoo style={{ color: '#ffffff', fontSize: '27px', backroundColor: 'red', borderRight: '2px solid green' }} /> </span>

                </div>
                <div className='col-lg-3'>

                </div>

            </div>
        </div>
    );
};

export default Footer;