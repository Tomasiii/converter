import Header from "@/components/Header/Header";

import "./main-layout.css";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <main className={"mainLayout"}>
      <div className={"mainLayoutGlass"} data-testid="main-glass">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
