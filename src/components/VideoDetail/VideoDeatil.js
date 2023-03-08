import { format } from "date-fns";

import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

import Comments from "../Comments/Comments";

import "./VideoDeatil.scss";

function VideoDetail({ activeVideo }) {
  const { title, channel, description, views, likes, timestamp, comments } =
    activeVideo;
  return (
    <div className="video-detail">
      <h1 className="video-detail__title brainflix-title">{title}</h1>
      <div className="video-detail__info">
        <div className="video-detail__info__item">
          <h4 className="video-detail__subtitle brainflix-subtitle">
            By {channel}
          </h4>
          <p className="video-detail__time brainflix-text">
            {format(new Date(timestamp ?? null), "dd/mm/yyyy")}
          </p>
        </div>
        <div className="video-detail__info__item">
          <div className="video-detail__action">
            <img
              className="video-detail__action__icon"
              src={viewsIcon}
              alt="views icon"
            />
            <span className="video-detail__action__count brainflix-text">
              {views}
            </span>
          </div>
          <div className="video-detail__action">
            <img
              className="video-detail__action__icon"
              src={likesIcon}
              alt="likes icon"
            />
            <span className="video-detail__action__count brainflix-text">
              {likes}
            </span>
          </div>
        </div>
      </div>
      <p className="video-detail__desc brainflix-text">{description}</p>
      <Comments comments={comments || []} />
    </div>
  );
}

export default VideoDetail;
