import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const useIconSize = (mobileSize = "28px", laptopSize = "22") => {
  const [iconSize, setIconSize] = useState(mobileSize);

  const isMobile = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    isMobile ? setIconSize(mobileSize) : setIconSize(laptopSize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return iconSize;
};
