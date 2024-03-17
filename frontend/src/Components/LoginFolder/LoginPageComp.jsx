import React, { useState } from 'react';
import './style.css'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { getUserToApi } from '../../redux/actions/userActions';
import axios from 'axios';
import { GETUSER } from '../../redux/types/types';
import { showAlertFunc } from '../showAlertFunc';

function LoginPageComp() {

    const [loginObj, setloginObj] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        loginObj[name] = value;
        setloginObj({ ...loginObj });
    }

    const handleLoginSweetAlert = (textvalue) => {
        Swal.fire({
            title: '',
            text: textvalue,
            toast: false,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: 'smokewhite',
            confirmButtonText: 'Ok'
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (loginObj.email === '' || loginObj.password === '') {
            handleLoginSweetAlert('Please Enter email and password');
        }
        else {
            axios
                .post("http://localhost:7000/api/user/login", loginObj)
                .then((resp) => {
                    dispatch(getUserToApi({ type: GETUSER, authToken: resp.data.token }))
                    showAlertFunc('Login SuccessFully');
                    navigate('/dashboard');
                }).catch((err) => {
                    handleLoginSweetAlert('user With this email or password not Exist');
                });
        }
    }

    return (
        <>
            <div className='mainParent mt-5'>
                <div className=' container'>
                    <div className='row g-0 w-100 d-flex justify-content-center'>
                        <div className='col-12 col-lg-8 col-xl-6'>
                            <div className="form-container shadow-lg">

                                <div className="logo-container-lg fs-2">
                                    Welcome Back!
                                </div>

                                <div className="social-buttons">
                                    <button className="social-button facebook">
                                        <BsFacebook />
                                        <span>Login with Facebook</span>

                                    </button>
                                    <button className="social-button apple">
                                        < BsApple />
                                        <span>Login with Apple</span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <form className="form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleLoginChange} placeholder="Enter your email" name="email" id="email" type="text" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input autoComplete='password' onChange={handleLoginChange} name="password" placeholder="Enter your password" id="password" type="password" />
                                    </div>

                                    <button onClick={(event) => handleLogin(event)} type="submit" className="form-submit-btn">Login</button>
                                </form>

                                <span className="forgot-password-link link" href="/">Forgot Password</span>

                                <p className="signup-link">
                                    Don't have an account?
                                    <span className="signup-link link" onClick={() => navigate('/signup')}> Sign up now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPageComp;
