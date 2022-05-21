import {
  monthBeforeDate,
  weekBeforeDate,
  yearBeforeDate,
} from "@/utils/normalizeDate";

export interface IDataBtn {
  label: string;
  onClick: Function;
}

export const dataBtn: IDataBtn[] = [
  { label: "Year", onClick: yearBeforeDate },
  { label: "Three Month", onClick: monthBeforeDate.bind(3) },
  { label: "Week", onClick: weekBeforeDate },
];
