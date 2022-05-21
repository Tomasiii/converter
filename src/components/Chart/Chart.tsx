import { AnimateSharedLayout } from "framer-motion";
import { memo, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "react-loading-skeleton/dist/skeleton.css";

import ChartBtn from "@/components/Chart/ChartBtn";
import { dataBtn } from "@/components/Chart/chart.data";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

import { ConverterService } from "@/services/converter.service";

import { yearBeforeDate } from "@/utils/normalizeDate";

import style from "./chart.module.scss";

interface IProps {
  firFlag: string;
  secFlag: string;
}

interface IChartData {
  categories: string[];
  data: number[];
}

const Chart = ({ firFlag, secFlag }: IProps) => {
  const [startDate, setStartDate] = useState(yearBeforeDate());
  const [chartData, setChartData] = useState<null | IChartData>(null);
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    ConverterService.getTimeframeRate(firFlag, secFlag, startDate).then(
      (res) => {
        const quotes = res.data.quotes;
        setChartData({
          categories: Object.keys(quotes),
          data: Object.values(quotes).map((quote) => Object.values(quote)[0]),
        });
      }
    );
  }, [firFlag, secFlag, startDate]);

  const apexColor = chartData
    ? chartData.data[0] > chartData.data[chartData.data.length - 1]
      ? "#ff0000"
      : "#29ff00"
    : "#000";

  return (
    <div>
      {chartData ? (
        <>
          <ReactApexChart
            height={300}
            width={600}
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
                categories: chartData.categories,
              },
            }}
            series={[
              {
                name: "Sales",
                data: chartData.data,
                color: apexColor,
              },
            ]}
            type="area"
          />
          <div className={style.periodBtn}>
            {/* @ts-ignore*/}
            <AnimateSharedLayout>
              <p>Sort By:</p>

              {dataBtn.map((btn, i) => (
                <ChartBtn
                  key={btn.label}
                  activeColor={apexColor}
                  label={btn.label}
                  isSelected={i === activeBtn}
                  handleClick={() => {
                    setStartDate(btn.onClick());
                    setActiveBtn(i);
                  }}
                />
              ))}
            </AnimateSharedLayout>
          </div>
        </>
      ) : (
        <SkeletonLoader height={350} width={600} />
      )}
    </div>
  );
};

export default memo(Chart);
