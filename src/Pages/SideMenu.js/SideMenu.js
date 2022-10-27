import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FcStart } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const SideMenu = () => {
    const { courses } = useContext(AuthContext);
    return (
        <ListGroup>
            {courses.map(c => <ListGroup.Item key={c.id} className='mt-3  bg-info ' >
                <Link className='text-dark text-decoration-none' to={`/course/${c.id}`}>
                    <h4><FcStart />  {c.title}</h4></Link></ListGroup.Item>)}
        </ListGroup>
    );
};

export default SideMenu;