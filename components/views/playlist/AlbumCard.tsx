import Image from "next/image";
import AlbumCardStyles from "styles/albumCard.module.css";
import { ISong } from "utils/types";

interface IAlbumCard extends ISong {}

const AlbumCard = ({ id, title, artist, cover, audio }: IAlbumCard) => {
  return (
    <div className={AlbumCardStyles.card}>
      <div className={AlbumCardStyles.imgContainer}>
        <Image
          src={cover}
          alt="Playlist Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="text__xxsmReg">{title}</h3>
      <span className="text__xxsmReg">{artist}</span>
    </div>
  );
};

export default AlbumCard;
