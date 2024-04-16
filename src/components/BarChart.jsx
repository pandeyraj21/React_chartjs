import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { barData } from '../FAKE_DATA';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph() {
    const options = {
      scales: {
        x: {
          grid: {
            display: false // Hide vertical gridlines
          }
        },
        y: {
          grid: {
            display: false // Hide horizontal gridlines
          }
        }
      }
    };
  
      return (
   
        <Bar options={options} data={barData} />
      
      )
    }
    
    export default BarGraph