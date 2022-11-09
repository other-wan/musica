import AlbumStyle from "styles/albums.module.css";
import AlbumCard from "../AlbumCard";

const Albums = () => {
  return (
    <div className={AlbumStyle.newRelease}>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </div>
  );
};

export default Albums;
