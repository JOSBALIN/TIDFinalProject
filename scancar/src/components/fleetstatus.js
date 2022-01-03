import * as React from "react";
import "./managementmodules.css";
import {Bar} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import doughnutchart from "./doughnutchart";
import { red } from "@mui/material/colors";


const state = {
  labels: ['Available', 'Rented', 'Unavailable'],
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
      data: [65, 59, 80],
      hoverOffset:4,
      cutout: 75,
    }
  ]
}


const labels = ["11/01", "12/01","13/01","14/01","15/01","16/01","17/01",];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Ready',
      data: [11, 22, 33, 12, 31, 1, 0],
      backgroundColor: '#99DF7C',
    },
    {
      label: 'Rented',
      data: [11, 22, 33, 55, 77, 1, 0],
      backgroundColor: '#60BEA8',
    },
    {
      label: 'Returned',
      data: [22, 34, 66, 33, 22, 11, 22],
      backgroundColor: '#409ad6',
    },
    {
      label: 'Transfer',
      data: [22, 34, 66, 33, 22, 11, 22],
      backgroundColor: '#cc9f37',
    },
    {
      label: 'Unavailable',
      data: [22, 34, 66, 33, 22, 11, 22],
      backgroundColor: '#FBBF60',
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: false,
        text: 'Car status over next 7 days'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
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
            <p className="chartExplanation">48 hour fleet availability</p>
            <Doughnut
              id="doughnutChart"
              data={state}
              options={{
                plugins: {
                  title: {
                    display: false,
                    text: "More than 80% of your fleet is unavailable in the coming week. Consider ssadding more bla bla",
                    font: 1,
                  },
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
                title: {
                  display: false,
                  text: "Car overview next week",
                  font: 1,
                },
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



