import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBookmark, FaDollarSign, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Courses = ({ course }) => {
    const { title, image_url, details, id, rating, total_view } = course;
    return (
        <Col lg='6'>
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

                    <Card.Text>
                        {details.length > 200 ?
                            <>{details.slice(0, 100) + '...'}</>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <p >  <FaStar></FaStar> {rating.number}</p>
                        <p><FaDollarSign/>  {total_view}</p>
                    </Card.Footer>
                    <button className='btn btn-warning w-100'>Get Premium</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;