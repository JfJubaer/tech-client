import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';

const Footer = () => {
    const {color}=useContext(AuthContext);
    
    return (
        <div>
            <hr />
            <div className={color ? 'text-center p-5 opacity-50 text-dark':'text-center p-5 opacity-50 text-white'}>
                <div>All CopyRight Reserved</div><br />
                <div>Contact US :</div>
                <div><FaFacebook /> <FaTwitter /> <FaYoutube /></div>
            </div>
        </div>
    );
};

export default Footer;