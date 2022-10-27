import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className='m-5 p-5 text-center'>
            <h1>404 not Found Any Page</h1><br />
            <Button variant='danger'><Link className='text-decoration-none text-black' to='/'>Go Home?</Link></Button>
        </div>
    );
};

export default NoPage;