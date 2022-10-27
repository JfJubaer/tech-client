import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../Context/AuthContextProvider';

const MainLogin = () => {
    const { providerLogin,signIn,setLoading } = useContext(AuthContext);
    const gProvider = new GoogleAuthProvider();
    const ghProvider = new GithubAuthProvider();
    const [error,setError]=useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleEmailLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        signIn(email,pass)
        .then(()=>{
            form.reset();
            navigate(from,{replace:true});
            
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(() => {
            setLoading(false);
        })
    }

    const handleLoginGoogle = () => {
        providerLogin(gProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {})
    }
    const handleLoginGit = () => {
        providerLogin(ghProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {})
    }

    return (
        <div>
        <Form onSubmit={handleEmailLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='pass' type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Login
        </Button>
       
        <br />
        <p className='text-danger'>
            {error}
        </p>
    </Form>
            <ButtonGroup className='my-5 w-100' vertical>
                <Button onClick={handleLoginGoogle} className='mb-2' variant="outline-danger"><FaGoogle />  Log in with Google</Button>
                <Button onClick={handleLoginGit} className='mb-2' variant="outline-success"><FaGithub />  Log in with GitHub</Button>
                <Button variant="outline-warning">
                    <Link className='text-decoration-none' to='/register'>New here? please Register</Link></Button>
            </ButtonGroup>
        </div>
    );
};

export default MainLogin;