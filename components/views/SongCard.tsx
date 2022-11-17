import classNames from "classnames";
import SongCardStyles from "styles/songCard.module.css";

const SongCard = () => {
  return (
    <div className={SongCardStyles.card}>
      <div className={SongCardStyles.imgContainer}>
        <img
          src="https://res.cloudinary.com/yheenca/image/upload/v1668005710/musica/top%20charts/top_chart_1_htlvix.jpg"
          alt=""
        />
      </div>
      <span className={classNames("text__xxsmReg", SongCardStyles.title)}>
        Let me love you ~ Krisx
      </span>
      <span className={classNames("text__xxsmReg", SongCardStyles.artistType)}>
        Single
      </span>
      <div className={classNames("text__xxsmReg", SongCardStyles.optionMenu)}>
        :
      </div>
      <span className={classNames("text__xxsmReg", SongCardStyles.runtime)}>
        4:17
      </span>
    </div>
  );
};

export default SongCard;
