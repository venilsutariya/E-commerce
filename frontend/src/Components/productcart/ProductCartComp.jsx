import React from 'react';
import { HOC } from '../HOC/HOC';
import CartCard from './CartCard'
import { useSelector } from 'react-redux';
import LoaderComp from '../LoaderComp';

function ProductCartComp() {

  const stateCartArr = useSelector((state) => state.cartReducer.cartArr);

  return (
    <>
      <LoaderComp />
      <h2 className='my-5 text-center'>Your Cart</h2>
      <div className='row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-0'>
        {
          stateCartArr.map((x, i) => {
            return <div key={i} className='col p-3'>
              <CartCard obj={x} />
            </div>
          })
        }
      </div>
    </>
  )
}

export default HOC(ProductCartComp);
