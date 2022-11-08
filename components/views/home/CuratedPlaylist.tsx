import Image from "next/image";
import CuratedStyles from "styles/curated.playlist.module.css";

const CuratedPlaylist = () => {
  return (
    <section id="curatedPlaylist">
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
            <div className={CuratedStyles.curated__accounts}></div>
            <div className="curated__likes">
              <span>33 Likes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedPlaylist;
