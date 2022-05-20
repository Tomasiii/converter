// import { useEffect } from "react";
// import { axi } from "@/api/axios";
import Marquee from "react-fast-marquee";

import style from "./header.module.scss";

const Header = () => {
  const data = {
    USDEUR: 0.91,
    USDUAH: 29.1,
  };

  // useEffect(() => {
  //   axi
  //       .get("", {
  //         params: {
  //           source: "USD",
  //           currencies: "UAH,EUR",
  //         },
  //       })
  //       .then((res) => (exchangeRate = res.data.quotes));
  // }, []);

  return (
    <header>
      <h2>Header</h2>
      <Marquee pauseOnHover className={style.marquee} gradientWidth={20}>
        <span>USD/UAH {data.USDUAH}</span>
        <span>EUR/UAH {data.USDUAH / data.USDEUR}</span>
      </Marquee>
    </header>
  );
};

export default Header;
