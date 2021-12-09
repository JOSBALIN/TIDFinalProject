import * as React from "react";
import "./managementmodules.css";


// const ctx = 'myChart';
// const myChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });
// function getChart() {
//   return myChart;
// }

export default function FleetStatus() {

  return(
    <div>
      <div className="module" id="fleetstatusmodule">
        <div className="moduletitle" id="fleetstatus">
          <h3>Fleet status</h3>
        </div>
        <div id="myChart">
          {/* {myChart} */}
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



