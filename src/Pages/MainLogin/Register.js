import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContextProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);

    const handleAccept = (event) => {
        setAccept(event.target.checked);
    }


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const profile = {
            displayName: name, photoURL: photoURL
        }

        createUser(email, pass)
            .then(result => {
                form.reset();
                navigate('/');
                toast.success('Successfully Registered');
                handleUpdate(profile);

            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }
    const handleUpdate = (profile) => {
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => { })
    }

    return (
        <div className=' m-5 p-5'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Full Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter PhotoURL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='pass' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccept}
                        type="checkbox" label={<> <Link to='/terms'>Accept Terms And Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                <br /><br />
                <Link to='/mainLogin'>Already Registered? please Login</Link>
                <br />
                <br />
                <p className='text-danger'>
                    {error}
                </p>
            </Form>
        </div>
    );
};

export default Register;