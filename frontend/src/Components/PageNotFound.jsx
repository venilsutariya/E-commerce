import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
     <div className='bg-dark text-light d-flex flex-column justify-content-center align-items-center' style={{height : "100vh"}}>
        <h1>404 Not Found</h1>
        <Link className='text-white mt-5' to={'/'}>Go to Home</Link>
    </div> 
    </>
  )
}

export default PageNotFound
