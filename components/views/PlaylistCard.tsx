import Favourite from "components/icons/Favourite";
import Image from "next/image";
import Link from "next/link";
import PlaylistCardStyles from "styles/playlistCard.module.css";

interface IPlaylistCard {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
}

const PlaylistCard = ({ id, title, creator, thumbnail }: IPlaylistCard) => {
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
          <Link className="text__smReg" href={`/playlists/${id}`}>
            {title}
          </Link>
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
