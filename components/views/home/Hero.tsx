import Heart from "components/icons/Heart";
import ListManager from "components/ListManager";
import Image from "next/image";
import { Persons } from "providers/personList";
import PlaylistCard from "../PlaylistCard";
import HeroStyles from "styles/hero.module.css";
import CuratedImage from "assets/curated_image.png";
import SectionLayout from "layouts/SectionLayout";
import { TopCharts } from "providers/playlistProvider";

const Hero = () => {
  return (
    <>
      <SectionLayout
        className={HeroStyles.curatedPlaylist}
        content={
          <>
            <div className={HeroStyles.curatedContent}>
              <h2 className="text__xxsmReg">Curated playlist</h2>

              <article className={HeroStyles.curatedDesc}>
                <h3 className="text__xxlgBold">R & B Hits</h3>
                <p className="text__xsmReg">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
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
                style={{
                  objectFit: "cover",
                  zIndex: "1",
                  objectPosition: "top",
                }}
              />
            </div>
          </>
        }
      />
      <SectionLayout
        className={HeroStyles.topChart}
        title="Top charts"
        content={
          <ListManager
            data={TopCharts}
            renderItem={(item) => <PlaylistCard {...item} />}
            classNames={{
              list: HeroStyles.topChartList,
              item: "",
            }}
          />
        }
      />
    </>
  );
};

export default Hero;
