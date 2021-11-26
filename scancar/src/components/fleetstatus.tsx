import * as React from "react";
import "./managementmodules.css"
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
    <div className="module" id="fleetstatusmodule">
      <div className="moduletitle" id="fleetstatus">
        <h3>Fleet status</h3>
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

}



