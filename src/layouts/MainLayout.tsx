import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

interface IProps {
  children: JSX.Element | string;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
