"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {

  const data = {
    datasets:[{
      label:"Banks",
      data:[1250,2500,3750],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
    }],
    labels:["Bank 1","Bank 2"]
  }
  return (
    <div  style={{ width: '100px', height: '100px' }}>
      <Doughnut  data={data} 
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
        
      />
    </div>
  )
}

export default DoughnutChart