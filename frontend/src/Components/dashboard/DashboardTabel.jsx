import React from 'react';
import { showImgFunc } from '../HOC/showImgFunc'

function DashboardTabel() {

    const mystyle = {height :'80px' , width : '80px', objectFit : 'cover'}

  return (
    <>
    <div className='mt-5'>
    <h2>Recently Activity</h2>
     <div className=' table-responsive'>
     <table className='table text-center'>
        <thead>
            <tr>
                <th>Profile</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Order number</th>
                <th>Retained</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img className=' img-fluid mx-auto' src="https://i.pinimg.com/originals/b3/c9/df/b3c9dfa78c7a93bbd84f9c8fcbcc2a0e.jpg" style={mystyle} alt="" /></td>
                <td>Jenny Wilson</td>
                <td>New Customer</td>
                <td className='fw-bold' style={{color : '#8A2BE2'}}>#27364238</td>
                <td>1 min ago</td>
                <td>$123.50</td>
            </tr>
            <tr>
                <td><img className=' img-fluid shadow-lg mx-auto' src="https://tse4.mm.bing.net/th?id=OIP.Wwkj6mz7ZUkF8pBMY7UvIwHaHa&pid=Api&P=0&h=180" style={mystyle} alt="" /></td>
                <td>Guy Hwkins</td>
                <td>Sign up</td>
                <td className='fw-bold' style={{color : '#8A2BE2'}}>#63667357</td>
                <td>20 min ago</td>
                <td>$13.50</td>
            </tr>
            <tr>
                <td><img  className='img-fluid shadow-lg mx-auto' src="https://tse1.mm.bing.net/th?id=OIP.VYn-L5CmuONEzJmCiFUk3QHaFd&pid=Api&P=0&h=180" alt="" style={mystyle}/></td>
                <td>Ralph Edward</td>
                <td>New Customer</td>
                <td className='fw-bold' style={{color : '#8A2BE2'}}>#836732</td>
                <td>1 hr ago</td>
                <td>$23.50</td>
            </tr>
        </tbody>
     </table>
     </div>
    </div>
    </>
  )
}

export default DashboardTabel;
