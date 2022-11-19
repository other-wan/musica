import SectionLayout from "layouts/SectionLayout";
import TopCharts from "./TopCharts";
import CuratedPlaylist from "./CuratedPlaylist";
import HeroStyles from "styles/hero.module.css";
import { ITopCharts } from "utils/types";

interface IHero extends ITopCharts {}

const Hero = ({ topCharts }: IHero) => {
  return (
    <SectionLayout
      className={HeroStyles.hero}
      content={
        <>
          <CuratedPlaylist />
          <TopCharts topCharts={topCharts} />
        </>
      }
    />
  );
};

export default Hero;
