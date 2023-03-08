import "./NextVideoItem.scss";

function NextVideoItem() {
  return (
    <div className="next-video">
      <div
        className="next-video__photo"
        style={{
          backgroundImage: `url(https://i.imgur.com/5qyCZrD.jpg)`,
          backgroundColor: "#e1e1e1",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="next-video__content">
        <h4 className="next-video__title brainflix-subtitle">
          Take A Romantic Break In A Boutique Hotel
        </h4>
        <p className="next-video__channel brainflix-text">Todd Welch</p>
      </div>
    </div>
  );
}

export default NextVideoItem;
