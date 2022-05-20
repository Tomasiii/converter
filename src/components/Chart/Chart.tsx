import ReactApexChart from "react-apexcharts";

interface IProps {}

const Chart = ({}: IProps) => {
  return (
    <ReactApexChart
      options={{
        chart: {
          type: "area",
          height: "auto",
        },
        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },

        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2017-09-19",
            "2018-09-19",
            "2019-09-19",
            "2020-09-19",
            "2021-09-19",
            "2022-09-19",
            "2023-09-19",
          ],
        },
      }}
      series={[
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ]}
      type="area"
    />
  );
};

export default Chart;
