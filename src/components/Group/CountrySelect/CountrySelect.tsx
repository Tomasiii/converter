import { memo } from "react";
import Select, { components } from "react-select";

import {
  ICountryOption,
  countryOptions,
} from "@/components/Group/CountrySelect/country-select.data";

import style from "./country-select.module.scss";

interface IProps {
  currency: string;
  handleCurrency: (newValue: ICountryOption) => void;
}

const CountrySelect = ({ currency, handleCurrency }: IProps) => {
  const { Option, SingleValue } = components;

  // icon in options
  const IconOption = (props: any) => (
    <Option {...props}>
      <span className={style.icon}>{props.data.icon}</span>
      <span className={style.label}>{props.data.label}</span>
    </Option>
  );

  // icon in selected option
  const IconValue = (props: any) => (
    <SingleValue {...props}>
      <span className={style.icon}>{props.data.icon}</span>
      <span className={style.label}>{props.data.label}</span>
    </SingleValue>
  );

  const normalize = (cur: string) =>
    countryOptions().find((item) => item.value === cur);

  const SelectWithFlag = (props: any) => {
    return (
      <Select
        {...props}
        components={{ Option: IconOption, SingleValue: IconValue }}
        options={countryOptions()}
        onChange={handleCurrency}
        value={normalize(currency)}
      />
    );
  };

  return <SelectWithFlag />;
};

export default memo(CountrySelect);
