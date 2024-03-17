import React from 'react';
import { HOC } from '../HOC/HOC';
import OrderCard from './OrderCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoaderComp from '../LoaderComp';

function CompleteOrderComp() {

  const stateOrderArr = useSelector((state) => state.orderReducer.orderArr)
  const navigate = useNavigate();

  return (
    <>
      <LoaderComp />
      <div className=' d-flex justify-content-end p-3'>
        <button onClick={() => navigate('/completedorder')} className='p-2 shadow-lg mt-3 text-purple-800 fw-bold' style={{ border: '1px solid #000' }} >
          Completed Order
        </button>
      </div>
      <div className='row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-0'>
        {stateOrderArr.length === 0 ? <div className='text-center w-100'>No Order PLaced</div> :
          stateOrderArr.map((x, i) => {
            return <div key={i} className='col p-4'>
              <OrderCard obj={x} />
            </div>
          })
        }
      </div>
    </>
  )
}

export default HOC(CompleteOrderComp);
