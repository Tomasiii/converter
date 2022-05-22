import { FcMoneyTransfer } from "react-icons/fc";

import LanguageBtn from "@/components/Header/LanguageBtn/LanguageBtn";
import MarqueeCrypto from "@/components/Header/Marquee/MarqueeCrypto";
import MarqueeFiat from "@/components/Header/Marquee/MarqueeFiat";
import ChangeTheme from "@/components/Header/ThemeBtn/ThemeBtn";

import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        C<span className={style.logoGreener}>o</span>nv
        <span className={style.logoGreener}>e</span>rtor
        <FcMoneyTransfer />
      </h1>
      <MarqueeFiat />
      <MarqueeCrypto />
      <ChangeTheme />
      <LanguageBtn />
    </header>
  );
};

export default Header;
