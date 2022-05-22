import style from "./marquee.module.scss";

const FiatItem = ({ label, value }: { label: string; value: number }) => {
  return (
    <div>
      <span className={style.rateCountry}>{label}</span>
      <span className={style.rate}>{(1 / value).toFixed(2)}</span>
    </div>
  );
};
export default FiatItem;
