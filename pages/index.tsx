import CuratedPlaylist from "components/views/home/CuratedPlaylist";
import SectionLayout from "layouts/SectionLayout";
import TopCharts from "components/views/home/TopCharts";
import Albums from "components/views/home/Albums";
import Hero from "components/views/home/Hero";

export default function Home() {
  return (
    <>
      <SectionLayout content={<Hero />} />
      <SectionLayout title="New releases" content={<Albums />} />
      <SectionLayout title="Popular in your area" content={<Albums />} />
    </>
  );
}
