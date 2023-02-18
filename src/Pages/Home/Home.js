import React, { useContext } from 'react';
import Courses from '../Courses/Courses';
import { AuthContext } from '../../Context/AuthContextProvider';
import { Col, Row } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import SideMenu from '../SideMenu.js/SideMenu';
import Banner from './Banner';
import { Link } from 'react-router-dom';


const Home = () => {
  const { courses } = useContext(AuthContext);
  return (
    <div className='py-3 my-5 mx-5'>
      <Banner></Banner>
      <Row>
        <Col lg="4">
          <h2><FaCaretRight /> Browse Courses</h2>
          <SideMenu></SideMenu>
        </Col>
        <Col lg="8">
          <Row>
            {courses.slice(0, 3).map(course => <Courses key={course.id} course={course}></Courses>)}
          </Row>
        </Col>
      </Row>
      <div className="d-flex align-content-center ">
        <button className='btn my-5 mx-auto' style={{ width: '20rem', backgroundColor: '#95dcf0' }} ><Link className='text-decoration-none' to="/courses">Show all</Link></button>
      </div>
    </div>
  );
};

export default Home;