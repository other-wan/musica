import Favourite from "components/icons/Favourite";
import Image from "next/image";
import Link from "next/link";
import PlaylistCardStyles from "styles/playlistCard.module.css";
import { IPlaylist } from "utils/types";

const PlaylistCard = ({ id, title, cover, info }: IPlaylist) => {
  return (
    <div className={PlaylistCardStyles.card}>
      <div className={PlaylistCardStyles.content}>
        <div className={PlaylistCardStyles.imgContainer}>
          <Image
            src={cover}
            alt="Playlist Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={PlaylistCardStyles.cardDetails}>
          <Link className="text__smReg" href={`/playlists/${id}`}>
            {title}
          </Link>
          <span className="text__xxsmReg">{title.split(" ")[0]}</span>
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
