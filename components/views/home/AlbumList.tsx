import classNames from "classnames";
import ListManager from "components/ListManager";
import { Albums } from "providers/playlistProvider";
import AlbumListStyle from "styles/albumList.module.css";
import AlbumCard from "../AlbumCard";

const AlbumList = () => {
  return (
    <ListManager
      data={Albums}
      renderItem={(item) => <AlbumCard {...item} />}
      classNames={{
        list: AlbumListStyle.card,
        item: "",
      }}
    />
  );
};

export default AlbumList;
