import Favourite from "components/icons/Favourite";
import Image from "next/image";
import PlaylistCardStyles from "styles/playlistCard.module.css";

interface IPlaylistCard {
  title: string;
  creator: string;
  thumbnail: string;
}

const PlaylistCard = ({ title, creator, thumbnail }: IPlaylistCard) => {
  return (
    <div className={PlaylistCardStyles.card}>
      <div className={PlaylistCardStyles.content}>
        <div className={PlaylistCardStyles.imgContainer}>
          <Image
            src={thumbnail}
            alt="Playlist Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={PlaylistCardStyles.cardDetails}>
          <h3 className="text__smReg">{title}</h3>
          <span className="text__xxsmReg">{creator}</span>
          <p className="text__xsmReg">2:34:45</p>
        </div>
      </div>
      <div className={PlaylistCardStyles.iconContainer}>
        <Favourite />
      </div>
    </div>
  );
};

export default PlaylistCard;
