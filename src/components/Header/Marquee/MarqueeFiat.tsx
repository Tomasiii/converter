import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import FiatItem from "@/components/Header/Marquee/FiatItem";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

import { ConverterService } from "@/services/converter.service";

import style from "./marquee.module.scss";

const MarqueeFiat = () => {
  const [rate, setRate] = useState<null | Record<string, number>>(null);

  useEffect(() => {
    ConverterService.getExchangeRate("UAH", "USD,EUR,GBP,JPY").then((res) =>
      setRate(res.data.rates)
    );
  }, []);

  return (
    <>
      {rate ? (
        <Marquee
          pauseOnHover
          className={style.marquee}
          style={{ width: 450 }}
          gradientWidth={11}
        >
          <FiatItem label={"USD/UAH"} value={rate.USD} />
          <FiatItem label={"EUR/UAH"} value={rate.EUR} />
          <FiatItem label={"GBP/UAH"} value={rate.GBP} />
          <FiatItem label={"JPY/UAH"} value={rate.JPY} />
        </Marquee>
      ) : (
        <SkeletonLoader height={50} width={500} />
      )}
    </>
  );
};

export default MarqueeFiat;
