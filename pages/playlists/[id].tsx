import Image from "next/image";
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Collection from "components/icons/Collection";
import Like from "components/icons/Like";
import Play from "components/icons/Play";
import ChartButton from "components/views/charts/ChartButton";
import PlaylistStyles from "styles/playlists.module.css";
import SongCard from "components/views/SongCard";
import ListManager from "components/ListManager";
import { Albums, Songs, TopCharts } from "providers/playlistProvider";
import { IPlaylist } from "utils/types";

const Playlist = ({ id, title, cover, info, files }: IPlaylist) => {
  useEffect(() => {
    // 61.48%
    document.body.style.backgroundImage = `linear-gradient(180deg, hsla(200, 9%, 13%, 0.8) 0%, hsla(200, 9%, 13%, 1) 62%), url(${cover})`;
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={PlaylistStyles.playlistHero}>
        <div className={PlaylistStyles.playlistImageContainer}>
          <Image src={cover} alt="Hello" fill />
        </div>
        <div className={PlaylistStyles.playlistContent}>
          <div className={PlaylistStyles.playlistDesc}>
            <h3 className="text__xxlgBold">{title}</h3>
            <p className="text__xsmReg">{info}</p>
            <p>{`${files.length} songs`}</p>
          </div>
          <div className={PlaylistStyles.ActionButtons}>
            <ChartButton svg={<Play />} label={"Play all"} />
            <ChartButton svg={<Collection />} label={"Add to collection"} />
            <ChartButton svg={<Like />} label={"Like"} />
          </div>
        </div>
      </div>
      <ListManager
        data={files}
        renderItem={(item) => <SongCard album={title} {...item} />}
        classNames={{
          list: PlaylistStyles.songs,
          item: "",
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://musica-api.up.railway.app/playlist");
  const topCharts: IPlaylist[] = await res.json();

  const paths = topCharts.map((_charts) => {
    return {
      params: {
        id: _charts.id,
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://musica-api.up.railway.app/playlist");
  const topCharts: IPlaylist[] = await res.json();

  const { id } = context.params as IParams;
  const chart = topCharts.find((_chart) => _chart.id === id);

  return {
    props: chart!,
  };
};

export default Playlist;
