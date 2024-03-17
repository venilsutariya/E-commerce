import React, { useContext, useState } from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TfiMenu } from 'react-icons/tfi'
import { SlClose } from 'react-icons/sl'
import sidestyle from './sidebar/style.module.css'
import { BsStickies } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { CgProfile } from 'react-icons/cg'
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { showImgFunc } from './HOC/showImgFunc';
import { useSelector } from 'react-redux';
import { loginContext } from '../App';
import Swal from 'sweetalert2';
import { GrCompliance } from 'react-icons/gr'

function NavbarComp() {

    const navigate = useNavigate();
    const login = useContext(loginContext);
    const stateCartArr = useSelector((state) => state.cartReducer.cartArr);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const userObj = JSON.parse(localStorage.getItem('user'));
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout it!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                login.setlogin(localStorage.getItem('user'));
                navigate('/');
            }
        })
    }

    return (
        <>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title className='color fw-bold'>venil's E-comm</Offcanvas.Title>
                    <SlClose className='fs-1 color fw-bold' onClick={handleClose} />
                </Offcanvas.Header>
                <Offcanvas.Body className='offmenu'>
                    {
                        !localStorage.getItem('user') ?
                            <>
                                <div className='mb-3'><NavLink onClick={handleClose} to="/signup" className='mb-3 navli'>Signup</NavLink></div>
                                <div className='mb-3'><NavLink onClick={handleClose} to="/login" className='mb-3 navli'>Login</NavLink></div>
                            </> :
                            <>
                                <div className='d-flex'>
                                <img onClick={() => showImgFunc(userObj.userImage)} className='navbarImg me-4' src={userObj.userImage} alt="" />
                                <Link to={'/productcart'}>
                                    <IconButton aria-label="cart" className='mx-5 fs-2 mt-1'>
                                        <StyledBadge badgeContent={stateCartArr?.length} color="secondary">
                                            <AiOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                                <Dropdown>
                                        <Dropdown.Toggle className='navdropdown ms-0 d-flex mt-2 fs-3' variant="" id="dropdown-basic">
                                            <AiOutlineSetting className='fs-1 ms-0' />
                                            {/* <img className='navbarImg' src={userObj.userImage} alt="" /> */}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={handleNavLogout}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>


                                <div className={`mt-3 ${sidestyle.sidemenu} sidemenu`}>
                                    <NavLink onClick={handleClose} to='/dashboard' className={`w-100 text-center mb-4 d-flex`}>
                                        <span className='me-5'><RxDashboard className='fs-4' /></span>
                                        <span>DASHBOARD</span>
                                    </NavLink>
                                    <NavLink onClick={handleClose} to={'/products'} className={`text-center mb-4 d-flex`}>
                                        <span className='me-5'><MdProductionQuantityLimits className='fs-4' /></span>
                                        <span>PRODUCTS</span>
                                    </NavLink>
                                    <NavLink onClick={handleClose} to={'/profile'} className={`text-center mb-4 d-flex`}>
                                        <span className='me-5'><CgProfile className='fs-4' /></span>
                                        <span>PROFILE</span>
                                    </NavLink>
                                    <NavLink onClick={handleClose} to={'/productcart'} className={`text-center mb-4 d-flex`}>
                                        <span className='me-5'><AiOutlineShoppingCart className='fs-4' /></span>
                                        <span>YOUR CART</span>
                                    </NavLink>
                                    <NavLink onClick={handleClose} to={'/order'} className={`text-center mb-4 d-flex`}>
                                        <span className='me-5'><BsStickies className='fs-4' /></span>
                                        <span>ORDER</span>
                                    </NavLink>
                                    <NavLink onClick={handleClose} to={'/completedorder'} className={`text-center mb-4 d-flex`}>
                                        <span className='me-5'><GrCompliance className='fs-4' /></span>
                                        <span>COMPLETED ORDER</span>
                                    </NavLink>
                                </div>
                            </>
                    }
                </Offcanvas.Body>
            </Offcanvas>


            <Navbar expand="lg" className="navbar sticky-top bg-gray-200">
                <Container className='mycontainer'>
                    <div className='d-flex justify-content-between w-100 align-items-center'>
                        <Navbar.Brand href="/" className='color fw-bold fs-4'>venil's E-comm</Navbar.Brand>
                        <TfiMenu className='d-block d-xxl-none fs-3 me-3' onClick={handleShow} />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto" >
                            {
                                !localStorage.getItem('user') ?
                                    <>
                                        <NavLink to="/signup" className='me-5  navli'>Signup</NavLink>
                                        <NavLink to="/login" className='me-5  navli'>Login</NavLink>
                                    </> :
                                    <>
                                        <Link to={'/productcart'}>
                                            <IconButton aria-label="cart" className='me-5 fs-2 mt-1'>
                                                <StyledBadge badgeContent={stateCartArr?.length} color="secondary">
                                                    <AiOutlineShoppingCart />
                                                </StyledBadge>
                                            </IconButton>
                                        </Link>
                                        <img onClick={() => showImgFunc(userObj.userImage)} className='navbarImg me-4' src={userObj.userImage} alt="" />
                                        <Dropdown>
                                            <Dropdown.Toggle className='navdropdown d-flex mt-2 fs-3' variant="" id="dropdown-basic">
                                                <AiOutlineSetting className='' />
                                                {/* <img className='navbarImg' src={userObj.userImage} alt="" /> */}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2" onClick={handleNavLogout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComp;