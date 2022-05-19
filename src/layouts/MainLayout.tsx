import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Footer />
      {children}
      <Header />
    </>
  );
};

export default MainLayout;
