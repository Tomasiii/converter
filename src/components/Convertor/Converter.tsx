import { useEffect, useState } from "react";

import Chart from "@/components/Chart/Chart";
import Group from "@/components/Group/Group";

// import { axi } from "@/api/axios";
import style from "./convertor.module.scss";

interface IProps {}

const Converter = ({}: IProps) => {
  const [firInput, setFirInput] = useState("");
  const [firSelect, setFirSelect] = useState("");
  const [secInput, setSecInput] = useState("");
  const [secSelect, setSecSelect] = useState("");
  // const [exchangeRate, setExchangeRate] = useState(1);
  const exchangeRate = 2;

  // useEffect(() => {
  //   axi
  //     .get("live", {
  //       params: {
  //         source: `${firSelect}`,
  //         currencies: `${secSelect}`,
  //       },
  //     })
  //     .then((res) => (setExchangeRate(res.data.quotes[`${firSelect}${secSelect}`])));
  // }, [firSelect, secSelect]);

  useEffect(() => {
    setSecInput(String(+firInput * exchangeRate));
  }, [firInput]);

  useEffect(() => {
    setFirInput(String(+secInput / exchangeRate));
  }, [secInput]);

  return (
    <main>
      <h2>Convertor</h2>
      <div className={style.converter}>
        <Group
          money={firInput}
          setMoney={setFirInput}
          currency={firSelect}
          setCurrency={setFirSelect}
        />
        <Group
          money={secInput}
          setMoney={setSecInput}
          currency={secSelect}
          setCurrency={setSecSelect}
        />
        <Chart />
      </div>
    </main>
  );
};

export default Converter;
