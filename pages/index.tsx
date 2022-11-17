import SectionLayout from "layouts/SectionLayout";
import Albums from "components/views/home/Albums";
import Hero from "components/views/home/Hero";
import HeroStyles from "styles/hero.module.css";

export default function Home() {
  return (
    <>
      <SectionLayout className={HeroStyles.hero} content={<Hero />} />
      <SectionLayout title="New releases" content={<Albums />} />
      <SectionLayout title="Popular in your area" content={<Albums />} />
    </>
  );
}
