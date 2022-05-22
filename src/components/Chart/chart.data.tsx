import {
  threeMonthBeforeDate,
  weekBeforeDate,
  yearBeforeDate,
} from "@/utils/normalizeDate";

export interface IDataBtn {
  i18Label: string;
  key: string;
  onClick: Function;
}

export const dataBtn = (): IDataBtn[] => {
  return [
    { i18Label: "chartBtn.year", onClick: yearBeforeDate, key: "year" },
    {
      i18Label: "chartBtn.three-month",
      onClick: threeMonthBeforeDate,
      key: "month",
    },
    { i18Label: "chartBtn.week", onClick: weekBeforeDate, key: "week" },
  ];
};
