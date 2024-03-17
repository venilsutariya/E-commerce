import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineCloseCircle , AiOutlinePlus , AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addOrderApi } from '../../redux/actions/orderAction';
import { useNavigate } from 'react-router-dom';

function OrderModalComp({productId}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setquantity(1);
    };
    const handleShow = () => setShow(true);

    const handleBuyNow = () => {
        handleShow();
    }

    const handleAddOrder = () => {
        handleClose();
        dispatch(addOrderApi({quantity , productId}));
        navigate('/order')
    }

    return (
        <>
        <button className=' bg-violet-600 w-50 text-white p-2' onClick={() => handleBuyNow()}>Buy Now</button>
            <Modal centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Add Quntity</Modal.Title>
                    <AiOutlineCloseCircle onClick={handleClose} className='fs-2'/>
                </Modal.Header>
                <Modal.Body className='text-center fs-3 d-flex justify-content-center user-select-none'>
                    <span className='me-4 mt-1 shadow px-2' onClick={() => setquantity(quantity + 1)}><AiOutlinePlus/></span>{quantity}<span onClick={() => {
                        if(quantity > 1){
                            setquantity(quantity - 1);
                        }
                        else{
                            setquantity(quantity);
                        }
                    }} className='px-2 ms-4 mt-1 shadow'><AiOutlineMinus/></span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={() => handleAddOrder()}>
                        Buy Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OrderModalComp;
