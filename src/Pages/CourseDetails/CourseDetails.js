import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBookmark, FaDollarSign, FaShareAlt, FaStar } from 'react-icons/fa';
import {  useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const { title, image_url, details, rating, total_view } = useLoaderData();
    return (
        <div>
            <Card className='mt-2 shadow-lg img-fluid bg-info' style={{ width: '45rem' }}>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" style={{ height: '200px' }} src={image_url} />
                <Card.Body>
                        {details}
                    <Card.Text>
                        <details></details>
                    </Card.Text>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <p >  <FaStar></FaStar> {rating.number}</p>
                        <p><FaDollarSign/>  {total_view}</p>
                    </Card.Footer>
                    <button className='btn btn-warning w-100'>Details</button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default CourseDetails;