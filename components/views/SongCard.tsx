import Image from "next/image";
import classNames from "classnames";
import SongCardStyles from "styles/songCard.module.css";

interface ISongCard {
  title: string;
  artist: string;
  album: string;
  runtime: string;
  thumbnail: string;
}

const SongCard = ({ title, artist, album, runtime, thumbnail }: ISongCard) => {
  return (
    <div className={SongCardStyles.card}>
      <div className={SongCardStyles.imgContainer}>
        <Image
          src={thumbnail}
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
        {runtime}
      </span>
    </div>
  );
};

export default SongCard;
