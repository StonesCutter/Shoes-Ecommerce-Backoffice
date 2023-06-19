import React from "react";
import Chart from "react-apexcharts";

function LineChart(props) {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const series = [
    {
      name: props.dataName,
      data: props.data,
    },
  ];

  //var chart = new ApexCharts(document.querySelector("#chart"), options);

  return (
    <div>
      {" "}
      <Chart
        options={options}
        series={series}
        width="400"
        type="bar" /*type="line"*/
      />
    </div>
  );
}

export default LineChart;
