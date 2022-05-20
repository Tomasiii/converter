import style from "./flag.module.scss";

export enum EFlags {
  "UAH" = -6345,
  "EUR" = -1890,
  "USD" = -6453,
}

interface IProps {
  flag: keyof typeof EFlags;
}
const FlagIcon = ({ flag }: IProps) => {
  return (
    <span
      className={style.flag}
      style={{ backgroundPositionY: EFlags[flag] }}
    />
  );
};

export default FlagIcon;
