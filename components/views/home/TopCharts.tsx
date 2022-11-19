import ListManager from "components/ListManager";
import SectionLayout from "layouts/SectionLayout";
import PlaylistCard from "../PlaylistCard";
import TopChartStyles from "styles/topChart.module.css";
import { ITopCharts } from "utils/types";

const TopCharts = ({ topCharts }: ITopCharts) => {
  return (
    <SectionLayout
      className={TopChartStyles.topChart}
      title="Top charts"
      content={
        <ListManager
          data={topCharts}
          renderItem={(item) => <PlaylistCard {...item} />}
          classNames={{
            list: TopChartStyles.topChartList,
            item: "",
          }}
        />
      }
    />
  );
};

export default TopCharts;
