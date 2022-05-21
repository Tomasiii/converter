import { BsSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";

import { useTheme } from "@/hooks/useTheme";

import style from "./header-theme.module.scss";

const changeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={style.theme}>
      Theme
      {theme === "light" ? (
        <BsSunFill color={"#ffde00"} size={25} />
      ) : (
        <IoIosMoon color={"#ffde00"} size={25} />
      )}
    </div>
  );
};

export default changeTheme;
