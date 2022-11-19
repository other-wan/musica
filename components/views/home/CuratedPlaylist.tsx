import Heart from "components/icons/Heart";
import ListManager from "components/ListManager";
import Image from "next/image";
import { Persons } from "providers/personList";
import CuratedImage from "assets/curated_image.png";
import SectionLayout from "layouts/SectionLayout";
import CuratedPlaylistStyles from "styles/curatedPlaylist.module.css";

const CuratedPlaylist = () => {
  return (
    <SectionLayout
      className={CuratedPlaylistStyles.playlist}
      content={
        <>
          <div className={CuratedPlaylistStyles.content}>
            <h2 className="text__xxsmReg">Curated playlist</h2>

            <article className={CuratedPlaylistStyles.description}>
              <h3 className="text__xxlgBold">R & B Hits</h3>
              <p className="text__xsmReg">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </article>
            <div className={CuratedPlaylistStyles.details}>
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
                  list: CuratedPlaylistStyles.personsList,
                  item: CuratedPlaylistStyles.personsItem,
                }}
              />
              <div className={CuratedPlaylistStyles.curatedLikes}>
                <Heart />
                <span className="text__lgReg">33 Likes</span>
              </div>
            </div>
          </div>
          <div
            className={CuratedPlaylistStyles.imageContainer}
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
  );
};

export default CuratedPlaylist;
