import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
       return <Spinner className='m-5' animation="border" variant="warning" />
    }
   if(!user){
    return <Navigate to='/mainLogin' state={{from:location}} replace></Navigate>
   }
   else return children;
}


export default Private;