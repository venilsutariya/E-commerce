import React, { useEffect, useState } from 'react';
import { HOC } from '../HOC/HOC';
import ProductCompForm from './ProductCompForm';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LoaderComp from '../LoaderComp';
import { getProductApi } from '../../redux/actions/productAction';

function ProductComp() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getProductApi());
    // eslint-disable-next-line
  } , [])
  const [imagepath, setimagepath] = useState('');
  const stateProductArr = useSelector((state) => state.productReducer.productArr);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      let editObj = stateProductArr.find(item => item._id === params.id);
      setimagepath(editObj.productImage);
      setobj({ ...editObj });
      handleShow();
    }
    // eslint-disable-next-line
  }, [stateProductArr])

  const state = useSelector((state) => state.productReducer);

  const blankobj = { productName: '', price: '', category: '', shopName: '', mobile: '', discount: '', discription: '', colors: '', productImage: '', };
  const [obj, setobj] = useState({ productName: '', price: '', category: '', shopName: '', mobile: '', discount: '', discription: '', colors: '', productImage: '', });

  const [show, setShow] = useState(false);
  const [errObj, seterrObj] = useState({});

  const handleClose = () => {
    setShow(false);
    setobj({ ...blankobj });
    seterrObj({});
    navigate('/products')
  }
  const handleShow = () => {
    setShow(true);
  }
  return (
    <>
      <LoaderComp />
      <div className=' d-flex justify-content-between p-3'>
        <button className='p-2 shadow-lg mt-3 text-purple-800 fw-bold' style={{ border: '1px solid #000' }} onClick={handleShow}>
          Add Product
        </button>
        <button onClick={() => navigate('/productcart')} className='p-2 shadow-lg mt-3 text-purple-800 fw-bold' style={{ border: '1px solid #000' }} >
          Watch Your Cart
        </button>
      </div>
      <ProductCompForm setimagepath={setimagepath} imagepath={imagepath} obj={obj} setobj={setobj} errObj={errObj} seterrObj={seterrObj} show={show} handleShow={handleShow} handleClose={handleClose} />
      <h2 className='my-3 ms-3'>Watch Products</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0'>
        {
          state.productArr.map((x, i) => {
            return <div key={i} className='col d-flex justify-content-center'>
              <div className='p-1'><ProductCard setimagepath={setimagepath} setobj={setobj} handleShow={handleShow} obj={x} /></div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default HOC(ProductComp);
