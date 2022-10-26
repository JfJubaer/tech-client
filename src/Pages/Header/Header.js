import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FcCalculator } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthContextProvider';

const Header = () => {
    const {color,setColor}=useContext(AuthContext);
    return (
        <Navbar bg="warning" expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><FcCalculator />  Tech Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className='d-flex justify-content-between'>
                        <div><Nav.Link href="#home">Home</Nav.Link></div>
                   
                        <div><Nav.Link href="#link">Link</Nav.Link></div>
                        <div><button onClick={()=>{setColor(!color)}} className='btn btn-outline-info text-dark'>Change Theme</button></div>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;