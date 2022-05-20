// import { useEffect } from "react";
// import { axi } from "@/api/axios";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import style from "./header.module.scss";

const Header = () => {
  const [rate, setRate] = useState({
    USDEUR: 0.94545,
    USDGBP: 0.80114,
    USDUAH: 29.561209,
  });

  console.log(setRate);

  // useEffect(() => {
  //   axi
  //       .get("live", {
  //         params: {
  //           source: "USD",
  //           currencies: "UAH,EUR,GBP",
  //         },
  //       })
  //       .then((res) => (setRate(res.data.quotes)));
  // }, []);

  return (
    <header className={style.header}>
      <h2>Header</h2>
      <Marquee pauseOnHover className={style.marquee} gradientWidth={11}>
        <div>
          <span className={style.rateCountry}>USD/UAH</span>
          <span className={style.rate}>{rate.USDUAH.toFixed(2)}</span>
        </div>
        <div>
          <span className={style.rateCountry}>EUR/UAH</span>

          <span className={style.rate}>
            {(rate.USDUAH / rate.USDEUR).toFixed(2)}
          </span>
        </div>

        <div>
          <span className={style.rateCountry}>GBP/UAH</span>

          <span className={style.rate}>
            {(rate.USDUAH / rate.USDGBP).toFixed(2)}
          </span>
        </div>
      </Marquee>
    </header>
  );
};

export default Header;
