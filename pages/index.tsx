import { GetStaticProps } from "next";
import SectionLayout from "layouts/SectionLayout";
import AlbumList from "components/views/home/AlbumList";
import Hero from "components/views/home/Hero";
import HeroStyles from "styles/hero.module.css";
import { IPlaylist, ISong, ITopCharts } from "utils/types";

interface IHome extends ITopCharts {
  newReleases: ISong[];
  popular: ISong[];
}

export default function Home({ topCharts, newReleases, popular }: IHome) {
  console.log(topCharts, newReleases, popular);

  return (
    <>
      <SectionLayout
        className={HeroStyles.hero}
        content={<Hero topCharts={topCharts} />}
      />
      <SectionLayout
        title="New releases"
        content={<AlbumList albums={newReleases} />}
      />
      <SectionLayout
        title="Popular in your area"
        content={<AlbumList albums={popular} />}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urls = [
    "https://musica-api.up.railway.app/playlist",
    "https://musica-api.up.railway.app/new",
    "https://musica-api.up.railway.app/popular",
  ];

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  const [topCharts, newReleases, popular] = data;

  return {
    props: {
      topCharts,
      newReleases,
      popular,
    },
  };
};
