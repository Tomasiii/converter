import { useEffect, useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";

import Chart from "@/components/Chart/Chart";
import Group from "@/components/Group/Group";

import { ConverterService } from "@/services/converter.service";

import style from "./convertor.module.scss";

const Converter = () => {
  const [firInput, setFirInput] = useState("");
  const [firSelect, setFirSelect] = useState("UAH");
  const [secInput, setSecInput] = useState("");
  const [secSelect, setSecSelect] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    ConverterService.getExchangeRate(firSelect, secSelect).then((res) =>
      setExchangeRate(res.data.quotes[`${firSelect}${secSelect}`])
    );
  }, [firSelect, secSelect]);

  useEffect(() => {
    setSecInput(String(+firInput * exchangeRate));
  }, [firInput]);

  useEffect(() => {
    setFirInput(String(+secInput / exchangeRate));
  }, [secInput]);

  const swapper = () => {
    setFirSelect(secSelect);
    setSecSelect(firSelect);
    setFirInput("");
    setSecInput("");
  };

  return (
    <main>
      <div className={style.converter}>
        <div className={style.groupWrapper}>
          <Group
            money={firInput}
            setMoney={setFirInput}
            currency={firSelect}
            setCurrency={setFirSelect}
          />
          <VscArrowSwap className={style.swapper} onClick={() => swapper()} />
          <Group
            money={secInput}
            setMoney={setSecInput}
            currency={secSelect}
            setCurrency={setSecSelect}
          />
        </div>
        <Chart firFlag={firSelect} secFlag={secSelect} />
      </div>
    </main>
  );
};

export default Converter;
