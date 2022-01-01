import * as React from "react";
import "./managementmodules.css";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const doughnutState = {
  labels: ["Available", "In use", "Maintenance"],
  datasets: [
    {
      label: "Rainfaijfdogijdfiogll",
      backgroundColor: ["#60BEA8", "#99DF7C", "#FBBF60"],
      hoverBackgroundColor: ["#4d9987", "#77ad61", "#c99a4f"],
      data: [652, 59, 80],
      hoverOffset: 4,
      cutout: 120,
    },
  ],
};


export default function DoughnutChart() {
  return (
    <div>
        <div id="chartDiv">
            <Doughnut
              id="doughnutChart"
              data={doughnutState}
               options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend:{
                    display:false
                }
              }}
            />
        </div>
      </div>
  );
}
