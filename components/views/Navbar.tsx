import { FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navList } from "providers/navList";
import ListManager from "components/ListManage";
import classNames from "classnames";
import Logo from "assets/Logo.svg";
import NavStyles from "styles/navbar.module.css";

interface INavbar {
  navToggle: boolean;
  setNavToggle: (active: boolean) => void;
}

const Navbar: FunctionComponent<INavbar> = ({ navToggle, setNavToggle }) => {
  const navRef = useRef<HTMLElement>(null);

  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.asPath);

  useEffect(() => {
    const handleMenuClose = (e: MouseEvent) => {
      if (
        navToggle &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setNavToggle(false);
      }
    };

    document.addEventListener("click", handleMenuClose, true);
    document.body.classList.toggle("body__content");

    return () => {
      document.removeEventListener("click", handleMenuClose, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navToggle]);

  return (
    <nav
      className={classNames(NavStyles.navbar, {
        [NavStyles.nav__active]: navToggle,
      })}
      ref={navRef}
    >
      <ListManager
        data={navList.firstItems}
        renderItem={(item) => (
          <Link
            href={item.href}
            className={classNames(NavStyles.nav__link, {
              [NavStyles.nav__linkActive]: activeLink === item.href,
            })}
            onClick={() => {
              setNavToggle(false);
              setActiveLink(item.href);
            }}
          >
            <>
              {item.icon(activeLink === item.href)}
              <span className="text__smBold">{item.name}</span>
            </>
          </Link>
        )}
        classNames={{
          list: NavStyles.nav__list,
          item: NavStyles.nav__item,
        }}
      />

      <ListManager
        data={navList.secondItems}
        renderItem={(item) => (
          <Link
            className={classNames(NavStyles.nav__link, {
              [NavStyles.nav__linkActive]: activeLink === item.href,
            })}
            href={item.href}
            onClick={() => {
              setNavToggle(false);
              setActiveLink(item.href);
            }}
          >
            <>
              {item.icon(activeLink === item.href)}
              <span className="text__smBold">{item.name}</span>
            </>
          </Link>
        )}
        classNames={{
          list: NavStyles.nav__list,
          item: NavStyles.nav__item,
        }}
      />
    </nav>
  );
};

export default Navbar;
