import React, { useState } from 'react';
import { BsFacebook, BsApple } from 'react-icons/bs'
import './style.css'
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import validationArr from './JSON/validation.json'
import axios from 'axios';
import Swal from 'sweetalert2';
import { showAlertFunc } from '../showAlertFunc';

function SignupPageComp() {

    let [obj, setobj] = useState({userName : '' , email : '' , mobile : '' , gender : '' , birthDate : '' ,city : '' , state : '' , country : '' , postalCode : '' , officeContact : '' , qualification : '' , address : '' , password : '' , confirmPassword : '' , userImage : ''});
    const navigate = useNavigate();
    const [imagepath, setimagepath] = useState('');
    const [errObj, seterrObj] = useState({})

    const formData = new FormData();
    formData.append('userImage', obj.userImage);
    formData.append('email', obj.email);
    formData.append('userName', obj.userName);
    formData.append('mobile', obj.mobile);
    formData.append('gender', obj.gender);
    formData.append('birthDate', obj.birthDate);
    formData.append('city', obj.city);
    formData.append('state', obj.state);
    formData.append('country', obj.country);
    formData.append('postalCode', obj.postalCode);
    formData.append('officeContact', obj.officeContact);
    formData.append('qualification', obj.qualification);
    formData.append('password', obj.password);
    formData.append('confirmPassword', obj.confirmPassword);
    formData.append('address', obj.address);

    // convert to Base64 string
    const getBase64 = (file) =>
        new Promise(function (resolve, reject) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject("Error: ", error);
        });

    const getImagetoShow = async (image) => {
        setimagepath(await getBase64(image));
    }

    const handleSignupSweetAlert = (textvalue) => {
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

    const handleChange = (event) => {
        const { name, value, type } = event.target
        if (type === 'file') {
            obj.userImage = event.target.files[0];
            getImagetoShow(event.target.files[0]);
        }
        else {  
            obj[name] = value;
        }
        setobj({...obj});
        handleSignupValidation(name);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        for(let key in obj){
            handleSignupValidation(key);
        }
        if (Object.values(errObj).every((x) => x === "")){
            axios.post('http://localhost:7000/api/user/register' , formData).then((resp) => {
                // handle Resp
                navigate('/login');
                showAlertFunc('Signup successFully Login is Require');
            }).catch((err) => {
                // handle Error
                handleSignupSweetAlert('user With this Email or Password Alredy Exist');
            })
        }
    }

    const handleSignupValidation = (name) => {
        const validateObj = validationArr.find(x => x.name === name);
        // eslint-disable-next-line no-eval
        const checkcondition = validateObj?.conditions.find(x => eval(x.condition));
        if(checkcondition){
            if(checkcondition.otherFeild){
                errObj[checkcondition.otherFeild] = checkcondition.errmessage;
            }
            else{
                errObj[validateObj.name] = checkcondition.errmessage;
            }
        }
        else{
            delete errObj[name];
        }
        seterrObj({...errObj});
    }   

    return (
        <>
            <div className='mainParent2 py-5'>
                <div className='container w-100 shadow-none bg-transparent'>
                    <div className='row g-0 w-100 d-flex justify-content-center'>
                        <div className='col-12 col-lg-10 col-xl-10'>
                            <div className="form-container shadow-lg">

                                <div className="logo-container-lg fs-2">
                                    Welcome To Our Website!
                                </div>

                                <div className="social-buttons">
                                    <button className="social-button facebook">
                                        <BsFacebook />
                                        <span>Signup with Facebook</span>

                                    </button>
                                    <button className="social-button apple">
                                        < BsApple />
                                        <span>Signup with Apple</span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <form className="form">

                                    <div className="form-group">
                                        <label>Username</label>
                                        <input onChange={handleChange} required="" placeholder="Enter your Username" name="userName" type="text" />
                                        <span className=' text-danger'>{errObj.userName?.toUpperCase()}</span>
                                    </div>

                                    <div className='row g-1 g-md-4'>
                                        <div className="col form-group">
                                            <label >Email</label>
                                            <input onChange={handleChange} required="" placeholder="Enter your email" name="email" id="email" type="text" />
                                            <span className=' text-danger'>{errObj.email?.toUpperCase()}</span>
                                        </div>

                                        <div className="col form-group">
                                            <label >Password</label>
                                            <input onChange={handleChange} autoComplete='password' name="password" placeholder="Enter your password" id="password" type="password" />
                                            <span className=' text-danger'>{errObj.password?.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className='row g-1 g-md-4'>
                                        <div className="col form-group">
                                            <label >Confirm Password</label>
                                            <input onChange={handleChange} autoComplete='confirmpassword' name="confirmPassword" placeholder="Enter your confirm password" type="password" />
                                            <span className=' text-danger'>{errObj.confirmPassword?.toUpperCase()}</span>
                                        </div>
                                        <div className="col form-group">
                                            <label >Mobile</label>
                                            <input onChange={handleChange} placeholder="Enter your Mobile" name="mobile" id="" type="text" />
                                            <span className=' text-danger'>{errObj.mobile?.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className='row row-cols-2 row-cols-md-3 g-1 g-md-4'>
                                        <div className="col form-group">
                                            <label >City</label>
                                            <input onChange={handleChange} name="city" placeholder="Enter your city password" type="text" />
                                            <span className=' text-danger'>{errObj.city?.toUpperCase()}</span>
                                        </div>
                                        <div className="col form-group">
                                            <label >State</label>
                                            <input onChange={handleChange} placeholder="Enter your state" name="state" type="text" />
                                            <span className=' text-danger'>{errObj.state?.toUpperCase()}</span>
                                        </div>
                                        <div className="col-12 col-md form-group">
                                            <label >Birth date</label>
                                            <input onChange={handleChange} placeholder="Enter your BOD" name="birthDate" type="date" />
                                            <span className=' text-danger'>{errObj.birthDate?.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className='row row-cols-2 row-cols-md-3  g-1 g-md-4'>
                                        <div className="col form-group">
                                            <label >Country</label>
                                            <input onChange={handleChange} required="" name="country" placeholder="Enter your country" type="text" />
                                            <span className=' text-danger'>{errObj.country?.toUpperCase()}</span>
                                        </div>
                                        <div className="col form-group">
                                            <label >postalCode </label>
                                            <input onChange={handleChange} required="" placeholder="Enter your postalCode " name="postalCode" type="text" />
                                            <span className=' text-danger'>{errObj.postalCode?.toUpperCase()}</span>
                                        </div>
                                        <div className="col-12 col-md form-group">
                                            <label >office contact</label>
                                            <input onChange={handleChange}  placeholder="Enter your office contact" name="officeContact" type="text" />
                                            <span className=' text-danger'>{errObj.officeContact?.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className='row g-1 g-md-4'>
                                        <div className="col form-group">
                                            <label >Qualification</label>
                                            <input onChange={handleChange}  name="qualification" placeholder="Enter your Qualification" type="text" />
                                            <span className=' text-danger'>{errObj.qualification?.toUpperCase()}</span>
                                        </div>
                                        <div className="col form-group">
                                            <label >Address </label>
                                            <input onChange={handleChange} placeholder="Enter your postalCode " name="address" type="text" />
                                            <span className=' text-danger'>{errObj.address?.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    {/* radio button */}
                                    Gender
                                    <div className="radio-input">
                                        <label>
                                            <input onChange={handleChange} type="radio" id="value-1" name="gender" value="value-1" />
                                            <span>Male</span>
                                        </label>
                                        <label>
                                            <input onChange={handleChange} type="radio" id="value-2" name="gender" value="value-2" />
                                            <span>Female</span>
                                        </label>
                                        <label>
                                            <input onChange={handleChange} type="radio" id="value-3" name="gender" value="value-3" />
                                            <span>Other</span>
                                        </label>
                                        <span className="selection"></span>
                                    </div>
                                    <span className=' text-danger'>{errObj.gender?.toUpperCase()}</span>

                                    <FloatingLabel
                                        controlId="floatingInput3"
                                        label='Add Product Photo'
                                        className="mb-4"
                                    >
                                        <Form.Control onChange={handleChange} autoComplete='password' name='userImage ' className='inputs' type="file" placeholder="Enter Password" />
                                    </FloatingLabel>
                                    <img src={imagepath ? imagepath : 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'} style={{ height: '100px', width: '100px', objectFit: 'cover' }} alt="" />
                                    <span className=' text-danger'>{errObj.userImage?.toUpperCase()}</span>
                                    
                                    <button onClick={(e) => handleSignup(e)} type="submit" className="form-submit-btn">Signup</button>
                                </form>

                                <span className="forgot-password-link link" href="/">Forgot Password</span>

                                <p className="signup-link">
                                    already have an account?
                                    <span className="signup-link link" onClick={() => navigate('/login')}>Login now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPageComp;