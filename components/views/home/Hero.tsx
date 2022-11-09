import Heart from "components/icons/Heart";
import ListManager from "components/ListManage";
import Image from "next/image";
import { Persons } from "providers/personList";
import TopChartCard from "../TopchartCard";
import HeroStyles from "hero.module.css";

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <div className={HeroStyles.curatedCard}>
        <h3 className="text__xxsmReg">Curated playlist</h3>

        <div className={HeroStyles.curatedContent}>
          <article className="curated__content">
            <h2 className="text__xxlgBold">R & B Hits</h2>
            <p className="text__xsmReg">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </article>
          <div className={HeroStyles.curatedDetails}>
            <ListManager
              data={Persons}
              renderItem={(item) => (
                <Image src={item.src} alt={item.alt} width="34" height="34" />
              )}
              classNames={{
                list: HeroStyles.personsList,
                item: HeroStyles.personsItem,
              }}
            />
            <div className={HeroStyles.curatedLikes}>
              <Heart />
              <span className="text__lgReg">33 Likes</span>
            </div>
          </div>
        </div>
      </div>
      <div className={TopChartStyles.topChart}>
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
      </div>
    </div>
  );
};

export default Hero;
