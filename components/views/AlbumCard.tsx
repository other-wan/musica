import Image from "next/image";
import Link from "next/link";
import AlbumCardStyles from "styles/albumCard.module.css";

interface IAlbumCard {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
}

const AlbumCard = ({ id, title, artist, thumbnail }: IAlbumCard) => {
  return (
    <Link className={AlbumCardStyles.card} href={`/playlists/${id}`}>
      <div className={AlbumCardStyles.imgContainer}>
        <Image
          src={thumbnail}
          alt="Playlist Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="text__xxsmReg">{title}</h3>
      <span className="text__xxsmReg">{artist}</span>
    </Link>
  );
};

export default AlbumCard;
