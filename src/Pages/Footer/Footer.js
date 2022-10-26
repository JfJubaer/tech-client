import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='text-center m-5 opacity-50'>
                <div>All CopyRight Reserved</div><br />
                <div>Contact US :</div>
                <div><FaFacebook /> <FaTwitter /> <FaYoutube /></div>
            </div>
        </div>
    );
};

export default Footer;