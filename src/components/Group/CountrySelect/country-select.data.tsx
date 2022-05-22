import { useTranslation } from "react-i18next";

import FlagIcon from "@/components/Icons/FlagIcon/FlagIcon";

export interface ICountryOption {
  readonly value: string;
  readonly label: string;
  icon: JSX.Element;
}

// make function to use t() hook
export const countryOptions = (): ICountryOption[] => {
  const { t } = useTranslation();
  return [
    {
      value: "UAH",
      label: t("select.UAH"),
      icon: <FlagIcon flag="UAH" />,
    },
    { value: "EUR", label: t("select.EUR"), icon: <FlagIcon flag="EUR" /> },
    { value: "GBP", label: t("select.GBP"), icon: <FlagIcon flag="GBP" /> },
    {
      value: "USD",
      label: t("select.USD"),
      icon: <FlagIcon flag="USD" />,
    },
  ];
};
