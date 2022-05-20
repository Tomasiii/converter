import Select, { components } from "react-select";

import { countryOptions } from "@/components/Group/group.data";

import style from "./country-select.module.scss";

interface IProps {}

const CountrySelect = ({}: IProps) => {
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

  const SelectWithFlag = (props: any) => {
    return (
      <Select
        {...props}
        components={{ Option: IconOption, SingleValue: IconValue }}
        options={countryOptions}
      />
    );
  };

  return <SelectWithFlag />;
};

export default CountrySelect;
