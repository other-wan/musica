import CuratedPlaylist from "components/views/home/CuratedPlaylist";
import SectionLayout from "layouts/SectionLayout";
import TopCharts from "components/views/home/TopCharts";
import Albums from "components/views/home/Albums";

export default function Home() {
  return (
    <>
      <SectionLayout content={<CuratedPlaylist />} />
      <SectionLayout title="Top charts" content={<TopCharts />} />
      <SectionLayout title="New releases" content={<Albums />} />
      <SectionLayout title="Popular in your area" content={<Albums />} />
    </>
  );
}
