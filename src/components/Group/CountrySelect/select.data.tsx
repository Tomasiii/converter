import FlagIcon from "@/components/Icons/FlagIcon/FlagIcon";

export interface ICountryOption {
  readonly value: string;
  readonly label: string;
  icon: JSX.Element;
}

export const countryOptions: readonly ICountryOption[] = [
  {
    value: "UAH",
    label: "Украинская гривна",
    icon: <FlagIcon flag="UAH" />,
  },
  { value: "EUR", label: "Евро", icon: <FlagIcon flag="EUR" /> },
  { value: "GBP", label: "Фунт стерлингов", icon: <FlagIcon flag="GBP" /> },
  {
    value: "USD",
    label: "Доллар США",
    icon: <FlagIcon flag="USD" />,
  },
];
