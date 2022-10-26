import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import SideMenu from '../../Pages/SideMenu.js/SideMenu';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col  lg="4">
                    <SideMenu></SideMenu>
                </Col>
                <Col  lg="8">
                    <Outlet></Outlet>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Main;