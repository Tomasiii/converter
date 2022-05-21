import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import ChangeTheme from "@/components/Header/ChangeTheme/ChangeTheme";

import { axi } from "@/api/axios";

import style from "./header.module.scss";

const Header = () => {
  // default data before loading
  const [rate, setRate] = useState({
    USDEUR: 1,
    USDGBP: 1,
    USDUAH: 1,
  });

  useEffect(() => {
    axi
      .get("live", {
        params: {
          source: "USD",
          currencies: "UAH,EUR,GBP",
        },
      })
      .then((res) => setRate(res.data.quotes));
  }, []);

  return (
    <header className={style.header}>
      <h1>Convertor</h1>
      <ChangeTheme />
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
