import React from 'react';
import './auth.css';
import { Button, Form } from 'react-bootstrap';
function Register(props) {
    return (
        <>
            <div className="col-md-4 login-form">
                <p>Register</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        </>
    )
}
export default Register;