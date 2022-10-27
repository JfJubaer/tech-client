import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { FcCalculator } from "react-icons/fc";
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
                console.log(result?.user)
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar bg="warning" expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><FcCalculator />  Tech Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className='d-flex justify-content-between'>
                            <div><Nav.Link href="/">Home</Nav.Link></div>
                            <div><Nav.Link href="/">Courses</Nav.Link></div>
                            <div><Nav.Link href="/faq">FAQ</Nav.Link></div>
                            <div><Nav.Link href="/blogs">Blogs</Nav.Link></div>
                            <div><button onClick={handleTheme} className='btn btn-outline-info text-dark'>Change Theme</button></div>

                            <div className='mx-3'>{user?.photoURL?
                                <><Image title={user.displayName} roundedCircle src={user?.photoURL} style={{ width: '40px' }}></Image>
                                    <Button onClick={handleLogOut} className='btn' variant=''>LogOut</Button>
                                </> :
                                <div><Nav.Link href="/mainLogin"><><FaUser />Login</></Nav.Link></div>}</div>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;