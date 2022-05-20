import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import style from "./main-layout.module.scss";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className={style.mainLayout}>
      <div className={style.mainLayoutGlass}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
