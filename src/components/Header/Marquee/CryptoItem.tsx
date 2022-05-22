import style from "./marquee.module.scss";

interface IProps {
  label: string;
  value: number;
  isCheaper: boolean;
}

const CryptoItem = ({ label, value, isCheaper }: IProps) => {
  return (
    <div>
      <span className={style.rateCountry}>{label}</span>
      <span
        className={style.rate}
        style={{ color: isCheaper ? "red" : "green" }}
      >
        {value.toFixed(2)}
      </span>
    </div>
  );
};
export default CryptoItem;
