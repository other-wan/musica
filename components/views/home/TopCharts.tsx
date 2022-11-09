import TopChartStyles from "styles/topChart.module.css";
import TopChartCard from "./TopchartCard";

const TopCharts = () => {
  return (
    <div className={TopChartStyles.topChart}>
      <TopChartCard />
      <TopChartCard />
      <TopChartCard />
      <TopChartCard />
      <TopChartCard />
    </div>
  );
};

export default TopCharts;
