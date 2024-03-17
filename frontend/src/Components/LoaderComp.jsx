import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoaderComp() {
    return (
        <>
            <div className='loaderMain w-100'>
                <Spinner className='loader' animation="border" variant="dark" />
            </div>
        </>
    )
}

export default LoaderComp;
