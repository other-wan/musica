import Image from "next/image";
import { useEffect } from "react";
import ChartStyles from "styles/charts.module.css";

const TopChart = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(180deg, hsla(200, 9%, 13%, 0.8) 0%, hsla(200, 9%, 13%, 1) 61.48%), url(https://res.cloudinary.com/yheenca/image/upload/v1668379163/musica/top%20charts/chart_1_n6cowp.jpg)";
    document.body.classList.add(ChartStyles.chartBackground);
    document.querySelector("#header")?.classList.add(ChartStyles.chartHeader);

    return () => {
      document.body.style.backgroundImage = "";
      document.body.classList.remove(ChartStyles.chartBackground);
      document
        .querySelector("#header")
        ?.classList.remove(ChartStyles.chartHeader);
    };
  }, []);
  return (
    <>
      <div className={ChartStyles.chartHero}>
        <div className={ChartStyles.chartImageContainer}>
          <Image
            src="https://res.cloudinary.com/yheenca/image/upload/v1668379163/musica/top%20charts/chart_1_n6cowp.jpg"
            alt="Hello"
            fill
          />
        </div>
        <div className={ChartStyles.chartDesc}>
          <h3 className="text__xxlgBold">Tomorrows Tune</h3>
          <p className="text__xsmReg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, saepe recusandae.
          </p>
          <p>64 songs ~ 16 hrs+</p>
        </div>
      </div>
    </>
  );
};

export default TopChart;
