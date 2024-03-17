import React from 'react';
import { Card } from 'react-bootstrap';
import { showImgFunc } from '../HOC/showImgFunc';
import { useDispatch } from 'react-redux';
import { removeCartApi } from '../../redux/actions/cartAction';
import { showConfirmAlert } from '../sweetAlert';
import OrderModalComp from '../product/OrderModalComp';

function CartCard({obj}) {

    const dispatch = useDispatch();
  
    const removeCart = (productId) => {
        showConfirmAlert().then((confirm) => {
            if(confirm){
                dispatch(removeCartApi(productId))
            }
        })
    }
    
  return (
    <>
      <Card className="shadow productcard">
                <Card.Img
                    onClick={() => showImgFunc(obj.productImage)}
                    variant="top"
                    className="cardImg img-fluid" style={{height : '300px' , objectFit : 'cover'}}
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
                    <div className="mt-3 d-flex justify-content-between">
                        <button
                        onClick={() => removeCart(obj._id)}
                            className="actionbtn bg-danger px-5 p-2 text-white"
                            variant="danger"
                        >
                            Remove
                        </button>
                        <OrderModalComp productId={obj._id}/>
                    </div>
                </Card.Body>
            </Card>
    </>
  )
}

export default CartCard;
