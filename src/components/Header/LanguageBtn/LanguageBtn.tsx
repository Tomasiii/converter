import { useTranslation } from "react-i18next";

import style from "./language.module.scss";

const LanguageBtn = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <div className={style.langWrapper} data-testid="language-btn">
      <span
        className={style.en}
        onClick={() => changeLanguage("en")}
        data-testid="language-btn-en"
      >
        EN
      </span>
      <input
        type="checkbox"
        checked={i18n.language === "en"}
        onChange={toggleLanguage}
        className={style.check}
      />
      <span
        className={style.ua}
        onClick={() => changeLanguage("ua")}
        data-testid="language-btn-ua"
      >
        UA
      </span>
    </div>
  );
};

export default LanguageBtn;
