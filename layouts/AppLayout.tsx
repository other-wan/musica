import { FunctionComponent, ReactNode } from "react";
import { useToggle } from "usehooks-ts";
import Header from "components/views/Header";
import Footer from "components/views/Footer";
import Navbar from "components/views/Navbar";
import LayoutStyles from "styles/layout.module.css";

interface IAppLayout {
  children: ReactNode;
}

const AppLayout: FunctionComponent<IAppLayout> = ({ children }) => {
  const [navToggle, handleNavToggle, setNavToggle] = useToggle(false);

  return (
    <div className={LayoutStyles.layout}>
      <Header handleNavToggle={handleNavToggle} />
      <Navbar navToggle={navToggle} setNavToggle={setNavToggle} />
      <main className={LayoutStyles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
