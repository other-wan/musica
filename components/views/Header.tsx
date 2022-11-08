import Image from "next/image";
import Link from "next/link";
import Search from "assets/Search.svg";
import Logo from "assets/Logo.svg";
import Menu from "assets/Menu.svg";
import HeaderStyles from "styles/header.module.css";
import { FunctionComponent } from "react";

interface IHeader {
  handleNavToggle: () => void;
}

const Header: FunctionComponent<IHeader> = ({ handleNavToggle }) => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__container}>
        <button
          style={{ position: "relative" }}
          className={HeaderStyles.header__btnToggle}
          onClick={handleNavToggle}
        >
          <Image src={Menu} alt="Menu" />
        </button>

        <Link href="/" className={HeaderStyles.header__logo}>
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className={HeaderStyles.header__navSearch}>
          <button>
            <Image src={Search} alt="Search" />
          </button>
          <input
            type="search"
            name="nseacrch"
            id="nsearch"
            placeholder="Search artists"
            className="text__smBold"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
