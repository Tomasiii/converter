import { ChangeEvent } from "react";

import CountrySelect from "@/components/Group/CountrySelect/CountrySelect";
import SearchField from "@/components/Group/SearchField/SearchField";
import { ICountryOption } from "@/components/Group/group.data";

interface IProps {
  money: string;
  setMoney: (arg: string) => void;
  currency: string;
  setCurrency: (arg: string) => void;
}

const Group = ({ money, setMoney, currency, setCurrency }: IProps) => {
  const handleMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value);
  };
  const handleCurrency = (newValue: ICountryOption) => {
    setCurrency(newValue.value);
  };

  return (
    <div>
      <CountrySelect handleCurrency={handleCurrency} currency={currency} />
      <SearchField searchTerm={money} handleMoney={handleMoney} />
    </div>
  );
};

export default Group;
