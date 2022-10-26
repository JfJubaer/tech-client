import React, { useContext } from 'react';
import Courses from '../Courses/Courses';
import { AuthContext } from '../../Context/AuthContextProvider';
import {  Row } from 'react-bootstrap';
import { FaLaptop, FaRobot } from 'react-icons/fa';


const Home = () => {
    const { courses,color } = useContext(AuthContext);
    return (
      <>
      <div className={!color ?'text-center text-white':'text-center text-dark'}>
      <h2><FaLaptop /> Learn With More Fun</h2>
      <h2><FaRobot /> Touch Your Future </h2>
      </div>
      <Row>
        {courses.map(course=><Courses key={course.id} course={course}></Courses>)}
       
      </Row>
      </>
    );
};

export default Home;