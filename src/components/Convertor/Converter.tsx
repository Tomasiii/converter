import { useEffect, useState } from "react";

import Group from "@/components/Group/Group";

// import { axi } from "@/api/axios";
import style from "./convertor.module.scss";

interface IProps {}

const Converter = ({}: IProps) => {
  const [firMoney, setFirMoney] = useState("");
  const [secMoney, setSecMoney] = useState("");
  const exchangeRate = 1;

  // useEffect(() => {
  //   axi
  //     .get("", {
  //       params: {
  //         source: "UAH",
  //         currencies: "USD,EUR",
  //       },
  //     })
  //     .then((res) => (exchangeRate = res.data.quotes));
  // }, []);

  useEffect(() => {
    setSecMoney(String(+firMoney * exchangeRate));
  }, [firMoney]);

  useEffect(() => {
    setFirMoney(String(+secMoney / +exchangeRate));
  }, [secMoney]);

  return (
    <main>
      <h2>Convertor</h2>
      <div className={style.converter}>
        <Group money={firMoney} setMoney={setFirMoney} />
        <Group money={secMoney} setMoney={setSecMoney} />
      </div>
    </main>
  );
};

export default Converter;
