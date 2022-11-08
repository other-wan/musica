import Home from "components/icons/Home";
import Library from "components/icons/Library";
import Radio from "components/icons/Radio";
import Video from "components/icons/Video";
import Profile from "components/icons/Profile";
import Logout from "components/icons/Logout";

export const navList = {
  firstItems: [
    {
      id: 1,
      name: "Home",
      icon: (active: boolean) => <Home active={active} />,
      href: "/",
    },
    {
      id: 2,
      name: "My collection",
      icon: (active: boolean) => <Library active={active} />,
      href: "/library",
    },
    {
      id: 3,
      name: "Radio",
      icon: (active: boolean) => <Radio active={active} />,
      href: "/radio",
    },
    {
      id: 4,
      name: "Music videos",
      icon: (active: boolean) => <Video active={active} />,
      href: "/videos",
    },
  ],

  secondItems: [
    {
      id: 5,
      name: "Profile",
      icon: (active: boolean) => <Profile active={active} />,
      href: "/profile",
    },
    {
      id: 6,
      name: "Logout",
      icon: (active: boolean) => <Logout active={active} />,
      href: "/logout",
    },
  ],
};
