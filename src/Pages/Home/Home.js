import React, { useContext } from 'react';
import Courses from '../Courses/Courses';
import { AuthContext } from '../../Context/AuthContextProvider';


const Home = () => {
    const { courses } = useContext(AuthContext);
    return (
      <div>
        {courses.map(course=><Courses key={course.id} course={course}></Courses>)}
      </div>
    );
};

export default Home;