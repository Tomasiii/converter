import { motion } from "framer-motion";

import style from "./chartBtn.module.scss";

interface IProps {
  isSelected: boolean;
  label: string;
  handleClick: () => void;
  activeColor: string;
}

const ChartBtn = ({ label, isSelected, handleClick, activeColor }: IProps) => {
  return (
    <motion.div
      onClick={handleClick}
      className={style.btn}
      animate={{ color: isSelected ? activeColor : "" }}
      style={{ position: "relative" }}
    >
      {label}
      {isSelected && <ActiveLine activeColor={activeColor} />}
    </motion.div>
  );
};

const ActiveLine = ({ activeColor }: { activeColor: string }) => {
  return (
    <motion.div
      layoutId="activeLine"
      style={{
        position: "absolute",
        width: "100%",
        height: "4px",
        left: 0,
        bottom: "-6px",
        backgroundColor: activeColor,
      }}
    />
  );
};

export default ChartBtn;
