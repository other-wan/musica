import Image from "next/image";
import classNames from "classnames";
import SongCardStyles from "styles/songCard.module.css";
import { ISong } from "utils/types";

interface ISongCard extends ISong {
  album: string;
}

const SongCard = ({
  id,
  title,
  album,
  artist,
  cover,
  audio,
  duration,
}: ISongCard) => {
  return (
    <div className={SongCardStyles.card}>
      <div className={SongCardStyles.imgContainer}>
        <Image
          src={cover}
          alt="Playlist Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className={classNames("text__xxsmReg", SongCardStyles.title)}>
        {`${title} ~ ${artist}`}
      </span>
      <span className={classNames("text__xxsmReg", SongCardStyles.artistType)}>
        {album}
      </span>
      <div className={classNames("text__xxsmReg", SongCardStyles.optionMenu)}>
        :
      </div>
      <span className={classNames("text__xxsmReg", SongCardStyles.runtime)}>
        {duration}
      </span>
    </div>
  );
};

export default SongCard;
