import SectionLayout from "layouts/SectionLayout";
import AlbumList from "components/views/home/AlbumList";
import Hero from "components/views/home/Hero";
import HeroStyles from "styles/hero.module.css";

export default function Home() {
  return (
    <>
      <SectionLayout className={HeroStyles.hero} content={<Hero />} />
      <SectionLayout title="New releases" content={<AlbumList />} />
      <SectionLayout title="Popular in your area" content={<AlbumList />} />
    </>
  );
}
