import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Header/Header';
import { Col, Row } from 'react-bootstrap';
import SideMenu from '../../Pages/SideMenu.js/SideMenu';
import Footer from '../../Pages/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';


const Main = () => {
    const {color}=useContext(AuthContext);
    return (
        <div className={color ? 'bg-white text-dark':'bg-dark text-white'} >
            <Header></Header>
            <div className='py-3'>

                <div className='mx-5'>
                    <Row>
                        <Col lg="4">
                            <SideMenu></SideMenu>
                        </Col>
                        <Col lg="8">
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;