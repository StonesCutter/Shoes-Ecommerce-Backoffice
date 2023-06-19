import React from "react";
import Chart from "react-apexcharts";
//import countrySellsStats from "../../../utils/dashboardUtils";

function DonutChart(props) {
  //console.log("PROPS.DATA", props.data);
  const labels = props.data?.[0].labels;
  //console.log("PROPS.DATA.LABELS", labels);
  const series = props.data?.[1].series;
  //console.log("PROPS.DATA.SERIES", series);

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  // const series = [44, 55, 41, 17, 15];
  //const labels = ["A", "B", "C", "D", "E"];

  //var chart = new ApexCharts(document.querySelector("#chart"), options);

  return (
    <div>
      {" "}
      <Chart
        options={options}
        series={series}
        //labels={labels}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default DonutChart;
