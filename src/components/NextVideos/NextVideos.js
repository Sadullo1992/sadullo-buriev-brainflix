import NextVideoItem from "../NextVideoItem/NextVideoItem";
import "./NextVideos.scss";

function NextVideos() {
  return (
    <div className="next-videos">
      <h5 className="next-videos__title brainflix-label-text">NEXT VIDEOS</h5>
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
      <NextVideoItem />
    </div>
  );
}

export default NextVideos;
