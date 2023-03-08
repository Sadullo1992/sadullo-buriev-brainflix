import NextVideoItem from "../NextVideoItem/NextVideoItem";
import "./NextVideos.scss";

function NextVideos({ nextVideos, onClickVideo }) {
  return (
    <div className="next-videos">
      <h5 className="next-videos__title brainflix-label-text">NEXT VIDEOS</h5>
      {nextVideos.map((video) => (
        <NextVideoItem
          onClickVideo={onClickVideo}
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}

export default NextVideos;
