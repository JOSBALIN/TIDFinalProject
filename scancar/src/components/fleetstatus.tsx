import * as React from "react";
import "./managementmodules.css";
import "https://cdn.anychart.com/releases/8.10.0/js/anychart-core.min.js";
import "https://cdn.anychart.com/releases/8.10.0/js/anychart-pie.min.js";
import DonutChart from "react-donut-chart";
// import * as ReactDOM from "react-dom";
// import {
//   Chart,
//   ChartLegend,
//   ChartSeries,
//   ChartSeriesItem,
//   ChartTitle,
// } from "@progress/kendo-react-charts";
// import "hammerjs";
// const series = [
//   {
//     category: "0-14",
//     value: 0.2545,
//   },
//   {
//     category: "15-24",
//     value: 0.1552,
//   },
//   {
//     category: "25-54",
//     value: 0.4059,
//   },
//   {
//     category: "55-64",
//     value: 0.0911,
//   },
//   {
//     category: "65+",
//     value: 0.0933,
//   },
// ];

// const labelContent = (props: { dataItem: { value: any; category: any; }; }) => {
//   let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
//     style: "percent",
//     minimumFractionDigits: 2,
//   });
//   return `${props.dataItem.category} years old: ${formatedNumber}`;
// };

// const ChartContainer = () => (
//   <Chart>
//     <ChartTitle text="World Population by Broad Age Groups" />
//     <ChartLegend position="bottom" />
//     <ChartSeries>
//       <ChartSeriesItem
//         type="pie"
//         data={series}
//         field="value"
//         categoryField="category"
//         labels={{
//           visible: true,
//           content: labelContent,
//         }}
//       />
//     </ChartSeries>
//   </Chart>
// );

export default function FleetStatus() {

  return(
    <div>
      <div className="module" id="fleetstatusmodule">
        <div className="moduletitle" id="fleetstatus">
          <h3>Fleet status</h3>
        </div>
        <div id="donut">
          <DonutChart
            data={[{
              label: 'Give you up',
              value: 25
            },
            {
              label: '',
              value: 75,
              isEmpty: true
            }]} 
          />
        </div>
      </div>
    
    </div>
  );

    //return(
        //ChartContainer()
        // <div class="container">
        //     <div class="row">
        //         <div class="col-md-6">
        //             <div class="panel panel-default">
        //                 <div class="panel-heading">
        //                     <h3>Pie Series</h3>
        //                 </div>
        //                 <div class="panel-body">
        //                     <div id="chart1"></div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-md-6">
        //             <div class="panel panel-default">
        //                 <div class="panel-heading">
        //                     <h3>Pie Customized Series</h3>
        //                 </div>
        //                 <div id="chart2" class="panel-body">
        //                 </div>
        //             </div>
        //         </div>
        //     </div>   
        // </div>
      //);

      // anychart.onDocumentReady(function () {
  
      //   // add data
      //   var data = anychart.data.set([
      //     ['Spotify', 34],
      //     ['Apple Music', 21],
      //     ['Amazon Music', 15],
      //     ['Tencent apps', 11],
      //     ['YouTube Music', 6],
      //     ['Others', 13]
      //   ]);
        
      //   // create a pie chart with the data
      //   var chart = anychart.pie(data)
        
      //   // set the chart radius making a donut chart
      //   chart.innerRadius('55%');
        
      //   // set the chart title
      //   chart.title('Music Streaming Apps Global Market Share')
      
      //   // set container id for the chart
      //   chart.container('container');
        
      //   // initiate chart drawing
      //   chart.draw();
      
      // });

}



