import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductApi } from '../../redux/actions/productAction';
import { useNavigate } from 'react-router-dom';
import { showImgFunc } from '../HOC/showImgFunc';
import Swal from 'sweetalert2';
import { addToCartApi } from '../../redux/actions/cartAction';
import OrderModalComp from './OrderModalComp';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { IconButton, Tooltip } from '@mui/material';

function ProductCard({ obj, handleShow, setobj, setimagepath }) {

    const stateProductArr = useSelector((state) => state.productReducer.productArr);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProductDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductApi(id));
            }
        })
    }

    const handleProductEdit = (id) => {
        navigate(`/products/${id}`);
        let editObj = stateProductArr.find(item => item._id === id);
        setimagepath(editObj.productImage);
        setobj({ ...editObj });
        handleShow();
    }

    const btnAddToCar = (id) => {
        dispatch(addToCartApi(id))
    }

    return (
        <>
            <Card className="shadow productcard">
                <Card.Img
                    onClick={() => showImgFunc(obj.productImage)}
                    variant="top"
                    className="cardImg img-fluid" style={{ height: '300px', width: '450px', objectFit: 'cover' }}
                    src={obj.productImage ? obj.productImage : 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
                />
                <Card.Body>
                    <Card.Title>{obj.productName}</Card.Title>
                    <Card.Text>{obj.discription}</Card.Text>
                    <span
                        className=""
                        style={{ textDecoration: "line-through", color: "grey" }}
                    >
                    </span>
                    <span className="fw-bold fs-5 me-3 text-decoration-line-through">$ {obj.price}</span>
                    <span
                        className=" me-3 p-2 "
                        style={{
                            borderRadius: "5px",
                            backgroundColor: "whitesmoke",
                        }}
                    >
                        {obj.discount}% Discount
                    </span>
                    <div
                        style={{
                            width: "fit-content",
                            backgroundColor: "palegreen",
                        }}
                        className="px-5 py-1 mybadge mt-3"
                    >
                        Save{" "}
                        {Math.floor(
                            obj.price -
                            (obj.price -
                                obj.price * (obj.discount / 100))
                        )}
                        <span className="fw-bold fs-5 ">$</span>
                    </div>
                    <div className="mt-3">
                        <span className="">Selling Price : </span>
                        {Math.floor(
                            obj.price - obj.price * (obj.discount / 100)
                        )}
                        <span className="fw-bold fs-5">$</span>
                    </div>

                    <div className="d-flex justify-content-between cardactiondiv w-100">
                        <button variant="warning"
                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Edit"
                            onClick={() => handleProductEdit(obj._id)}
                            className="actionbtnedit me-3">
                            <Tooltip title="Edit">
                                <IconButton>
                                    <AiOutlineEdit className='cardicon p-2 text-yellow-600 border rounded-circle bg-white' />
                                </IconButton>
                            </Tooltip>
                        </button>
                        <button
                            className="actionbtn"
                            variant="danger"
                            onClick={() => handleProductDelete(obj._id)}
                        >
                            <Tooltip title="Delete">
                                <IconButton>
                                    <AiOutlineDelete className='cardicon p-2 text-red-800 border rounded-circle bg-white' />
                                </IconButton>
                            </Tooltip>
                        </button>
                    </div>



                    <div className='mt-3'>
                        <button onClick={() => btnAddToCar(obj._id)} className='bg-dark w-50 text-white p-2'>Add To Cart</button>
                        <OrderModalComp productId={obj._id} />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductCard;
