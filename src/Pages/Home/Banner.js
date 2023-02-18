import React, { useContext } from 'react';
import { FaLaptop } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContextProvider';

const Banner = () => {
    const { color } = useContext(AuthContext);
    return (
        <div>
            <div className={!color ? 'text-center text-white' : 'text-center text-dark'}>
                <h1 className='mb-5'><FaLaptop className='mx-3' /> Learn With More Fun</h1>
                <h3>See our latest courses </h3>
            </div>
        </div>
    );
};

export default Banner;