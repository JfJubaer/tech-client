import React, { useContext } from 'react';
import Courses from '../Courses/Courses';
import { AuthContext } from '../../Context/AuthContextProvider';
import {  Row } from 'react-bootstrap';


const Home = () => {
    const { courses } = useContext(AuthContext);
    return (
      <Row>
        {courses.map(course=><Courses key={course.id} course={course}></Courses>)}
       
      </Row>
    );
};

export default Home;