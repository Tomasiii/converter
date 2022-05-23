import { useTranslation } from "react-i18next";
import { BsSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";

import { useTheme } from "@/hooks/useTheme";

import style from "./header-theme.module.scss";

const themeBtn = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div onClick={toggleTheme} className={style.theme} data-testid="theme-btn">
      <span className={style.theme_label} data-testid="theme-btn-text">
        {t("header.btn.theme")}
      </span>
      {theme === "light" ? (
        <BsSunFill color={"#ffde00"} size={25} />
      ) : (
        <IoIosMoon color={"#ffde00"} size={25} />
      )}
    </div>
  );
};

export default themeBtn;
