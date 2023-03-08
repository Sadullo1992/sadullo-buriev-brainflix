import "./NextVideoItem.scss";

function NextVideoItem({ video, onClickVideo }) {
  const { title, channel, image } = video;
  return (
    <div className="next-video" onClick={() => onClickVideo(video)}>
      <div
        className="next-video__photo"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "#e1e1e1",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="next-video__content">
        <h4 className="next-video__title brainflix-subtitle">{title}</h4>
        <p className="next-video__channel brainflix-text">{channel}</p>
      </div>
    </div>
  );
}

export default NextVideoItem;
