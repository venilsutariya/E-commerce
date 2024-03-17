import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function ChartDashBoard1({graphArr , graphArr2}) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
                boxWidth: 20,
                boxHeight: 20,
            }
          },
          title: {
            display: true,
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data:graphArr[0] ? graphArr[0] :[45 , 22 ,56 , 17 , 45 , 20 , 40 , 15],
            borderColor: '#000',
            backgroundColor: '#000',
          },
          {
            label: 'Dataset 2',
            data:graphArr2[0] ? graphArr2[0] :[12 , 34 , 10 , 45 , 20 , 56 , 34 , 8],
            borderColor: '#6e2fd3f7',
            backgroundColor: '#6e2fd3f7',
          },
        ],
      };

  return (
    <>
       <Line options={options} data={data} />
    </>
  )
}

export default ChartDashBoard1;
