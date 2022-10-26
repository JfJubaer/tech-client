import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { title, image_url, details, id, author, rating, total_view } = course;
    return (
        <Card className='mt-2 shadow-lg img-fluid' style={{ width: '45rem' }}>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image roundedCircle src={author?.img} style={{ width: '50px' }}></Image>
                    <div className='mx-3'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length > 200 ?
                        <>{details.slice(0, 100) + '...'} <Link to={`/news/${id}`}>read more</Link> </>
                        :
                        <>{details}</>
                    }
                </Card.Text>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <p >  <FaStar></FaStar> {rating.number}</p>
                    <p><FaEye></FaEye>  {total_view}</p>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default Courses;