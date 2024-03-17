import React from 'react';
import { Card } from 'react-bootstrap';
import { showImgFunc } from '../HOC/showImgFunc';

function RealCompletedOrderCard({obj}) {
  return (
    <>
      <Card className="shadow productcard">
                <Card.Img
                    onClick={() => showImgFunc(obj.productImage)}
                    variant="top"
                    className="cardImg img-fluid" style={{ height: '300px', objectFit: 'cover' }}
                    src={obj.productImage}
                />
                <Card.Body>
                    <div className='row'>
                        <div className='col'>
                            <Card.Title>{obj.productName}</Card.Title>
                            <Card.Text>{obj.discription}</Card.Text>
                            <span
                                className=""
                                style={{ textDecoration: "line-through", color: "grey" }}
                            >
                            </span>
                            <span className="fw-bold fs-5 me-3 text-decoration-line-through">${obj.price}</span>
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
                        </div>
                        <div className='col d-flex justify-content-end'>
                            <div>
                            <div className='mb-0'><span className='me-3 fw-bold'>Qunatity :</span> {obj.quantity}</div>
                            <div><span className='me-3 fw-bold'>Color :</span>{obj.colors}</div>
                            <div><span className='me-3 fw-bold'>orderComplateTime</span>{obj.orderComplateTime}</div>
                            <div className='mt-3'><span className='me-3 fw-bold'>TotalBill</span></div>
                            <div><span className=''>Price : {Math.floor(
                                    obj.price - obj.price * (obj.discount / 100)
                                )}<span className='fw-bold ms-2'>$</span></span></div>
                                <div>Calculating : {Math.floor(
                                    obj.price - obj.price * (obj.discount / 100)
                                )} X {obj.quantity}</div>
                                <hr className='mb-0'/>
                                <div className='mt-0'><span className='fw-bold'>Pay :</span> {Math.floor(
                                    obj.price - obj.price * (obj.discount / 100)
                                ) * obj.quantity}<span className='fw-bold ms-2'>$</span></div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <button
                                className="w-100 actionbtn bg-dark px-5 p-2 text-white"
                                variant="danger" disabled
                                >
                                COMPLETED
                            </button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
    </>
  )
}

export default RealCompletedOrderCard;
