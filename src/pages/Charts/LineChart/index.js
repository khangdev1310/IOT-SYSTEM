import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        // This more specific font property overrides the global property
        font: {
            size: 20,
            weight: 'bold',
        },
        color: "white",
    }
    },
    title: {
      display: true,
      text: 'Overview',
      color: 'white',
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
    },
    y: {
      // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 300,
      ticks: {
        color: 'white',
      },
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      label: 'Cảm biến ánh sáng',
      data: [50, 100, 200,70,150],
      borderColor: 'rgb(96 165 250)',
      backgroundColor: 'rgb(37 99 235)',
      fill: false,
    },
  ],
}

function LineChart() {
  return <Line options={options} data={data} width={100} height={100} />
}

export default LineChart
