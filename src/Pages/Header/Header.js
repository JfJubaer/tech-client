import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { FcCalculator } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Header = () => {
    const { color, setColor, user, logOut } = useContext(AuthContext);
    const handleTheme = () => {
        setColor(!color);
        toast.success('Theme Successfully Changed')
    }
    const handleLogOut = () => {
        logOut()
            .then(result => {
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar style={{ backgroundColor: '#70dbdb' }} expand="lg" >
            <Container>
                <Navbar.Brand ><FcCalculator />  Tech Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <div><Nav.Item ><Link className="nav-link active" aria-current="page" to="/">Home</Link></Nav.Item></div>
                        <div><Nav.Item ><Link className="nav-link" to="/courses">Courses</Link> </Nav.Item></div>
                        <div><Nav.Item ><Link className="nav-link" to="/faq">FAQ</Link></Nav.Item></div>
                        <div><Nav.Item ><Link className="nav-link" to="blogs">Blogs</Link></Nav.Item></div>

                        <div><button onClick={handleTheme} className='btn btn-outline-info text-dark'>Change Theme</button></div>

                        <div className='mx-3'>{user?.photoURL ?
                            <><Image title={user.displayName} roundedCircle src={user?.photoURL} style={{ width: '40px' }}></Image>
                                <Button onClick={handleLogOut} className='btn' variant=''>LogOut</Button>
                            </> :
                            <div><Nav.Link href="/mainLogin"><><FaUser />Login</></Nav.Link></div>}</div>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;