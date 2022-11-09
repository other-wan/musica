import Heart from "components/icons/Heart";
import ListManager from "components/ListManage";
import Image from "next/image";
import { Persons } from "providers/personList";
import CuratedStyles from "styles/curatedPlaylist.module.css";

const CuratedPlaylist = () => {
  return (
    <div id="curatedPlaylist">
      <div className={CuratedStyles.curated__card}>
        <h3 className="text__xxsmReg">Curated playlist</h3>

        <div className={CuratedStyles.curated__content}>
          <article className="curated__content">
            <h2 className="text__xxlgBold">R & B Hits</h2>
            <p className="text__xsmReg">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </article>
          <div className={CuratedStyles.curated__details}>
            <ListManager
              data={Persons}
              renderItem={(item) => (
                <Image src={item.src} alt={item.alt} width="34" height="34" />
              )}
              classNames={{
                list: CuratedStyles.curated__personsList,
                item: CuratedStyles.curated__personsItem,
              }}
            />
            <div className={CuratedStyles.curated__likes}>
              <Heart />
              <span className="text__lgReg">33 Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedPlaylist;
