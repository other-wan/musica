import { useIconSize } from "hooks/icon";

interface ILogout {
  active: boolean;
}

const Logout = ({ active }: ILogout) => {
  const size = useIconSize();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        active
          ? {
              filter:
                "drop-shadow(0px 0px 14.390411376953125px hsla(42, 94%, 69%, 0.25))",
            }
          : {}
      }
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
        clipRule="evenodd"
        fill={active ? "#FACD66" : "#EFEEE0"}
        fillOpacity={active ? "1" : "0.25"}
      />
    </svg>
  );
};

export default Logout;
