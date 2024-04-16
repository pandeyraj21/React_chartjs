import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { lineChartData } from '../FAKE_DATA';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const options = {
    // scales: {
    //   x: {
    //     grid: {
    //       display: false // Hide vertical gridlines
    //     }
    //   },
    //   y: {
    //     grid: {
    //       display: false // Hide horizontal gridlines
    //     }
    //   }
    // }
  };

    return (
 
      <Line options={options} data={lineChartData} />
    
    )
  }
  
  export default LineGraph