import Heart from "components/icons/Heart";
import ListManager from "components/ListManage";
import Image from "next/image";
import { Persons } from "providers/personList";
import TopChartCard from "../TopchartCard";
import HeroStyles from "styles/hero.module.css";
import CuratedImage from "assets/curated_image.png";
import { relative } from "path";

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <div className={HeroStyles.curatedPlaylist}>
        <div className={HeroStyles.curatedContent}>
          <h2 className="text__xxsmReg">Curated playlist</h2>

          <article className={HeroStyles.curatedDesc}>
            <h3 className="text__xxlgBold">R & B Hits</h3>
            <p className="text__xsmReg">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </article>
          <div className={HeroStyles.curatedDetails}>
            <ListManager
              data={Persons}
              renderItem={(item) => (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 34px, 20px"
                  style={{ objectFit: "cover" }}
                />
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
        <div
          className={HeroStyles.curatedImageContainer}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={CuratedImage}
            alt="Playlist Image"
            fill
            sizes="(max-width: 1024px) 100%, 100%"
            style={{ objectFit: "cover", zIndex: "1" }}
          />
        </div>
      </div>
      <div className={HeroStyles.topChart}>
        <h2 className="text__mdBold header">Top charts</h2>
        <div className={HeroStyles.topChartList}>
          <TopChartCard />
          <TopChartCard />
          <TopChartCard />
          <TopChartCard />
          <TopChartCard />
          <TopChartCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
