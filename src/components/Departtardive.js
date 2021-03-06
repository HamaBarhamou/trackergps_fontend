import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Depart tatdive',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'dataset',
        data: ['3', '60', '22', '80', '08', '01', '56'],
        backgroundColor: 'rgba(222, 99, 50, 1.5)',
      }
    ],
  }

const Departtardive = () => {
    return (
        <div style={{background:'white',width:'50%',margin:10}}>
            <Bar options={options} data={data}/>
        </div>
    );
};

export default Departtardive;