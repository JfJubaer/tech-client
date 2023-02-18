import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import Courses from './Courses';

const AllCourses = () => {
    const { courses } = useContext(AuthContext);
    return (
        <div className='container my-5 mx-auto row'>
            {courses.map((course, i) => <Courses key={i} course={course}></Courses>)}
        </div>
    );
};

export default AllCourses;