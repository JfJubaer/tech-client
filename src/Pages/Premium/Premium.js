import React from 'react';
import { FaArrowAltCircleRight, FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const { title, total_view } = useLoaderData();
    return (
        <div className='m-5 p-5 border'>
            <h3>Checkout  <FaArrowAltCircleRight /></h3>
            <h5>Course Name : {title}</h5>
            <h5>Course Cost : {total_view}<FaDollarSign /></h5>
            <button className='btn btn-warning'>Proceed to pay</button>
        </div>
    );
};

export default Premium;