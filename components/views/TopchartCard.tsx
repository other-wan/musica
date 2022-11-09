import Favourite from "components/icons/Favourite";
import TopChartCardStyles from "styles/topChartCard.module.css";

const TopChartCard = () => {
  return (
    <div className={TopChartCardStyles.card}>
      <div className={TopChartCardStyles.content}>
        <div className={TopChartCardStyles.imgContainer}>
          <img
            src="https://res.cloudinary.com/yheenca/image/upload/v1668005710/musica/top%20charts/top_chart_1_htlvix.jpg"
            alt=""
          />
        </div>
        <div className={TopChartCardStyles.cardDetails}>
          <h3 className="text__smReg">Golden age of 80s</h3>
          <span className="text__xxsmReg">Sean swadder</span>
          <p className="text__xsmReg">2:34:45</p>
        </div>
      </div>
      <div className={TopChartCardStyles.iconContainer}>
        <Favourite />
      </div>
    </div>
  );
};

export default TopChartCard;
