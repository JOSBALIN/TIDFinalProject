import * as React from "react";
import "./managementmodules.css";
import {Bar} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

/* State details for Doughnut chart */
const state = {
  labels: ['Rented', 'Available', 'Maintenance'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#60BEA8',
        '#99DF7C',
        '#FBBF60',
      ],
      hoverBackgroundColor: [
      '#4d9987',
      '#77ad61',
      '#c99a4f',
      ],
      data: [63, 27, 20],
      hoverOffset:4,
      cutout: 75,
    }
  ]
}

/* details for Stacked bar chart */
const labels = ["11/01", "12/01","13/01","14/01","15/01","16/01","17/01",];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'A',
      maxBarThickness:32,
      data: [5, 6, 4, 4, 7, 5, 5],
      backgroundColor: '#99DF7C',
    },
    {
      label: 'B',
      maxBarThickness:32,
      data: [4, 3, 3, 1, 1, 4, 6],
      backgroundColor: '#60BEA8',
    },
    {
      label: 'C',
      maxBarThickness:32,
      data: [7, 5, 6, 5, 8, 9, 6],
      backgroundColor: '#409ad6',
    },
    {
      label: 'D',
      maxBarThickness:32,
      data: [4, 6, 8, 7, 8, 4, 5],
      backgroundColor: '#3e7fc9',
    },
    {
      label: 'E',
      maxBarThickness:32,
      data: [3, 3, 2, 4, 2, 1, 0],
      backgroundColor: '#3838b0',
    },
    {
      label: 'F',
      maxBarThickness:32,
      data: [4, 5, 5, 3, 4, 3, 3],
      backgroundColor: '#6438b0',
    },
  ]
};



export default function FleetStatus() {

  return (
    <div>
      <div className="module" id="fleetstatusmodule">
        <div className="moduletitle" id="fleetstatus">
          <h3>Fleet status</h3>
        </div>
        <div id="chartDiv">
          <div id="doughnutChart">
            <p className="chartExplanation">Current fleet status</p>
            <Doughnut
              id="doughnutChart"
              data={state}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                    display: true,
                    borderRadius:1,
                    labels:{
                      boxWidth:40,
                      usePointStyle:true
                      
                    }
                  },
                },
              }}
            />
            </div>
        <div id="barChart">
          <p className="chartExplanation">Overview of the rental office's fleet the next seven days</p>
          <Bar
            data={data}
            options={{
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
              plugins: {
                legend: {
                  position: "bottom",
                  display: true,
                  labels:{
                    boxWidth:40,
                    usePointStyle:true
                  }
                },
              },
            }}
          />
        </div>
        </div>
      </div>
    </div>
  );
}



