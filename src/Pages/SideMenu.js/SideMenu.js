import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FcStart } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const SideMenu = () => {
    const { courses } = useContext(AuthContext);
    return (
        <ListGroup>
            {courses.map(c => <ListGroup.Item key={c.id} className='mt-2 p-5 bg-success ' >
                <Link className='text-white'>
                    <h4><FcStart />  {c.title}</h4></Link></ListGroup.Item>)}
        </ListGroup>
    );
};

export default SideMenu;