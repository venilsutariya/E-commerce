import React from 'react';
import { HOC } from '../HOC/HOC';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RealCompletedOrderCard from './RealCompletedOrderCard';
import LoaderComp from '../LoaderComp';

function RealCompletedOrder() {
    const navigate = useNavigate();
    const stateOrderArr = useSelector((state) => state.orderReducer.completeOrderArr);

    return (
        <>
            <LoaderComp />
            <div className='d-flex justify-content-start p-3'>
                <button onClick={() => navigate('/order')} className='p-2 shadow-lg mt-3 text-purple-800 fw-bold' style={{ border: '1px solid #000' }}>
                    Your Order
                </button>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-0'>
                {stateOrderArr.length === 0 ? <div className='text-center'>No Order Completed</div> :
                    stateOrderArr.map((x, i) => {
                        return <div key={i} className='col p-4'>
                            <RealCompletedOrderCard obj={x} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default HOC(RealCompletedOrder);
