import classNames from "classnames";
import ListManager from "components/ListManager";
import { Albums } from "providers/playlistProvider";
import AlbumListStyle from "styles/albumList.module.css";
import { ISong } from "utils/types";
import AlbumCard from "../AlbumCard";

interface IAlbums {
  albums: ISong[];
}

const AlbumList = ({ albums }: IAlbums) => {
  return (
    <ListManager
      data={albums}
      renderItem={(item) => <AlbumCard {...item} />}
      classNames={{
        list: AlbumListStyle.card,
        item: "",
      }}
    />
  );
};

export default AlbumList;
