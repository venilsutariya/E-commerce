import React, { useState } from 'react'
import { HOC } from '../HOC/HOC'
import ChartDashBoard1 from './ChartDashBoard1';
import ChartDashBoard2 from './ChartDashBoard2';
import ChartDashBoard3 from './ChartDashBoard3';
import { cardData } from './dashboardData'
import DashboardTabel from './DashboardTabel';
import ChartDashBoard4 from './ChartDashBoard4';


function Dashboard() {

  const [graphArr, setgraphArr] = useState([]);
  const [graphArr2, setgraphArr2] = useState([]);
  const [graphArr3, setgraphArr3] = useState([]);
  const [active, setactive] = useState(cardData[0].year);

  const dashCardClick = (year, dataArr, dataArr2, dataArr3) => {
    setgraphArr([dataArr]);
    setgraphArr2([dataArr2]);
    setgraphArr3([dataArr3]);
    setactive(year);
  }

  return (
    <>
      <div className=' container-fluid my-2'>
        <div className='row row-cols-1 row-cols-lg-2 d-flex justify-content-center align-items-center'>
          <div className='col'>
            <div className='row row-cols-2 d-flex justify-content-center align-items-center'>
              {
                cardData.map((x, i) => {
                  return <div key={i} className='col mt-3'>
                    <div onClick={() => dashCardClick(x.year, x.dataArr, x.dataArr2, x.dataArr3)} className={`p-3 dashboardcard rounded-5 shadow-sm border text-center d-flex flex-column justify-content-center align-items-center ${x.year === active ? 'dashactive' : ''}`}>
                      <div className='fs-3 mb-4'>{x.icon}</div>
                      <h3 className='mb-4' style={{ color: '#6e2fd3f7' }}>{x.year}</h3>
                      <p>{x.text}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className='col d-flex justify-content-center align-items-center'>
            <ChartDashBoard1 graphArr2={graphArr2} graphArr={graphArr} />
          </div>
        </div>

        <div className='row row-cols-1 row-cols-lg-2'>
          <div className='col mt-3'>
            <div className='w-100 bg-purple-100 h-100 d-flex justify-content-center align-items-center'>
              <div className=''><ChartDashBoard2 graphArr={graphArr} /></div>
            </div>
          </div>
          <div className='col d-flex justify-content-center align-items-center mt-5 mt-lg-0'>
            <ChartDashBoard3 graphArr3={graphArr3} />
          </div>
        </div>
        <DashboardTabel />
        <ChartDashBoard4 />
      </div>
    </>
  )
}

export default HOC(Dashboard);
