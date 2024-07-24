import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUpAsync } from '../../service/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function SignUp() {

    const { user, err } = useSelector(state => state.authReducer);

    const [inputBox, setInputBox] = useState({
        fname: '',
        lname: '',
        email: "",
        password: "",
        conf_password: ''
    })

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInputBox({ ...inputBox, [name]: value });


    }

    const handleSubmit = (e) => {

        e.preventDefault();


        dispatch(signUpAsync(inputBox))

        setInputBox({
            fname: '',
            lname: '',
            email: "",
            password: "",
            conf_password: ""
        })
    }

    useEffect(() => {

        if (user) {
            navigate('/login')
        }

    }, [user])
    return (
        <>
        <div className='vh-100 d-flex align-items-center  bg-white signup-style'>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='col-7 p-4 bg-secondory-subtle'>
                            <h2>
                                Register
                            </h2>
                            <p className='text-danger'>{err ? err : ''}</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} name='fname' value={inputBox.fname} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" onChange={handleChange} name='lname' value={inputBox.lname} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' value={inputBox.email} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' value={inputBox.password} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="confirm Password" onChange={handleChange} name='conf_password' value={inputBox.conf_password} />
                                </Form.Group>
                                <Button variant='primary' type='submit'>
                                    SignUp
                                </Button>
                            </Form>
                        </div>

                    </Row>
                </Container>

            </div>

        </>
    )
}

export default SignUp