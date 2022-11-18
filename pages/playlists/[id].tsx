import Image from "next/image";
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import Collection from "components/icons/Collection";
import Like from "components/icons/Like";
import Play from "components/icons/Play";
import ChartButton from "components/views/charts/ChartButton";
import PlaylistStyles from "styles/playlists.module.css";
import SongCard from "components/views/SongCard";
import ListManager from "components/ListManager";
import { Albums, Songs, TopCharts } from "providers/playlistProvider";
import { ParsedUrlQuery } from "querystring";

interface IPlaylist {
  title: string;
  thumbnail: string;
}

const Playlist = ({ title, thumbnail }: IPlaylist) => {
  useEffect(() => {
    // 61.48%
    document.body.style.backgroundImage = `linear-gradient(180deg, hsla(200, 9%, 13%, 0.8) 0%, hsla(200, 9%, 13%, 1) 62%), url(${thumbnail})`;
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
          <Image src={thumbnail} alt="Hello" fill />
        </div>
        <div className={PlaylistStyles.playlistContent}>
          <div className={PlaylistStyles.playlistDesc}>
            <h3 className="text__xxlgBold">{title}</h3>
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
      <ListManager
        data={Songs}
        renderItem={(item) => <SongCard {...item} />}
        classNames={{
          list: PlaylistStyles.songs,
          item: "",
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topCharts = TopCharts.map((_topchart) => {
    return {
      id: _topchart.id,
      title: _topchart.title,
      thumbnail: _topchart.thumbnail,
    };
  });

  const albums = Albums.map((_album) => {
    return {
      id: _album.id,
      title: _album.title,
      thumbnail: _album.thumbnail,
    };
  });

  const paths = topCharts.concat(albums).map((_playlist) => {
    return {
      params: {
        id: _playlist.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const topCharts = TopCharts.map((_topchart) => {
    return {
      id: _topchart.id,
      title: _topchart.title,
      thumbnail: _topchart.thumbnail,
    };
  });

  const albums = Albums.map((_album) => {
    return {
      id: _album.id,
      title: _album.title,
      thumbnail: _album.thumbnail,
    };
  });

  const chart = topCharts
    .concat(albums)
    .find((_playlist) => _playlist.id === id);
  return { props: chart! };
};

export default Playlist;
