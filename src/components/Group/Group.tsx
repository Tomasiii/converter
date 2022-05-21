import { ChangeEvent, memo, useCallback } from "react";

import CountrySelect from "@/components/Group/CountrySelect/CountrySelect";
import { ICountryOption } from "@/components/Group/CountrySelect/select.data";
import SearchField from "@/components/Group/SearchField/SearchField";

import style from "./group.module.scss";

interface IProps {
  money: string;
  setMoney: (arg: string) => void;
  currency: string;
  setCurrency: (arg: string) => void;
}

const Group = ({ money, setMoney, currency, setCurrency }: IProps) => {
  const handleMoney = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value);
  }, []);

  const handleCurrency = useCallback((newValue: ICountryOption) => {
    setCurrency(newValue.value);
  }, []);

  return (
    <div className={style.group}>
      <CountrySelect handleCurrency={handleCurrency} currency={currency} />
      <SearchField searchTerm={money} handleMoney={handleMoney} />
    </div>
  );
};

export default memo(Group);
