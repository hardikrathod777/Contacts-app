import { Button, Form } from 'react-bootstrap'
import './Login.css'
import { useState,useEffect } from 'react'
// import { BsPass } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signINAsync } from '../../service/Actions/AuthAction'

function Login() {
    const [inputBox, setInputBox]= useState({
        email: '',
        password: '',
    })

    const {isLogin,err} = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputBox({...inputBox, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signINAsync(inputBox));

        setInputBox({
            email: '',
            password: '',
        })
    }

    useEffect(() => {

        if (isLogin) {
            navigate('/')
        }

    }, [isLogin])
    return (
        <>  
        <section className='login-page'>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 d-flex justify-content-center align-items-center div-height">
                        <div className='log-in-div'>
                            <h2>Log In </h2>
                            {err && <p className='text-danger'>{err}</p>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={inputBox.email}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={inputBox.password}/>
                                </Form.Group>
                                <Button variant='primary' type='submit'>
                                    LogIn
                                </Button>
                                <p className='sign-in-page'>Dont have an account? <a href='/signup'>Sign Up</a></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login