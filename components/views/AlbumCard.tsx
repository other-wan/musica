import AlbumCardStyles from "styles/albumCard.module.css";

const AlbumCard = () => {
  return (
    <div className={AlbumCardStyles.card}>
      <div className={AlbumCardStyles.imgContainer}>
        <img
          src="https://res.cloudinary.com/yheenca/image/upload/v1668005710/musica/top%20charts/top_chart_1_htlvix.jpg"
          alt=""
        />
      </div>
      <h3 className="text__xxsmReg">Life in a bubble</h3>
      <span className="text__xxsmReg">The van</span>
    </div>
  );
};

export default AlbumCard;
