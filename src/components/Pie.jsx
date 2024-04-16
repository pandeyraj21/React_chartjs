import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS, Tooltip, Legend,ArcElement } from 'chart.js';
import { pieChartData } from '../FAKE_DATA';

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement
);

function PieChart() {
    const options = {
    //   scales: {
    //     x: {
    //       grid: {
    //         display: false // Hide vertical gridlines
    //       }
    //     },
    //     y: {
    //       grid: {
    //         display: false // Hide horizontal gridlines
    //       }
    //     }
    //   }
    };
  
      return (
   
        <Pie options={options} data={pieChartData} />
      
      )
    }
    
    export default PieChart