import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import Header from '../../Pages/Header/Header';


const Main = () => {
    const { color } = useContext(AuthContext);
    return (
        <div className={color ? 'bg-white text-dark' : 'bg-dark text-white'} >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;