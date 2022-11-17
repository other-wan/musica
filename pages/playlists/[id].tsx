import Image from "next/image";
import { useEffect } from "react";

import Collection from "components/icons/Collection";
import Like from "components/icons/Like";
import Play from "components/icons/Play";
import ChartButton from "components/views/charts/ChartButton";
import PlaylistStyles from "styles/playlists.module.css";
import SongCard from "components/views/SongCard";

const Playlist = () => {
  useEffect(() => {
    // 61.48%
    document.body.style.backgroundImage =
      "linear-gradient(180deg, hsla(200, 9%, 13%, 0.8) 0%, hsla(200, 9%, 13%, 1) 62%), url(https://res.cloudinary.com/yheenca/image/upload/v1668379163/musica/top%20charts/chart_1_n6cowp.jpg)";
    document.body.classList.add(PlaylistStyles.playlistBackground);
    document
      .querySelector("#header")
      ?.classList.add(PlaylistStyles.playlistHeader);

    return () => {
      document.body.style.backgroundImage = "";
      document.body.classList.remove(PlaylistStyles.playlistBackground);
      document
        .querySelector("#header")
        ?.classList.remove(PlaylistStyles.playlistHeader);
    };
  }, []);
  return (
    <>
      <div className={PlaylistStyles.playlistHero}>
        <div className={PlaylistStyles.playlistImageContainer}>
          <Image
            src="https://res.cloudinary.com/yheenca/image/upload/v1668379163/musica/top%20charts/chart_1_n6cowp.jpg"
            alt="Hello"
            fill
          />
        </div>
        <div className={PlaylistStyles.playlistContent}>
          <div className={PlaylistStyles.playlistDesc}>
            <h3 className="text__xxlgBold">Tomorrows Tune</h3>
            <p className="text__xsmReg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, saepe recusandae.
            </p>
            <p>64 songs ~ 16 hrs+</p>
          </div>
          <div className={PlaylistStyles.ActionButtons}>
            <ChartButton svg={<Play />} label={"Play all"} />
            <ChartButton svg={<Collection />} label={"Add to collection"} />
            <ChartButton svg={<Like />} label={"Like"} />
          </div>
        </div>
      </div>
      <div className={PlaylistStyles.songs}>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </>
  );
};

export default Playlist;
