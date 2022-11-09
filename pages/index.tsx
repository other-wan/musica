import CuratedPlaylist from "components/views/home/CuratedPlaylist";
import SectionLayout from "layouts/SectionLayout";
import TopCharts from "components/views/home/TopCharts";

export default function Home() {
  return (
    <>
      <SectionLayout content={<CuratedPlaylist />} />
      <SectionLayout title="Top charts" content={<TopCharts />} />
    </>
  );
}
