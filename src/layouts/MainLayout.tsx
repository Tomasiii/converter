import Header from "@/components/Header/Header";

import "./main-layout.css";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className={"mainLayout"}>
      <div className={"mainLayoutGlass"}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
