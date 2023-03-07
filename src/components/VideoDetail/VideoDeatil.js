import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

import Comments from "../Comments/Comments";

import "./VideoDeatil.scss";

function VideoDetail() {
  return (
    <div className="video-detail">
      <h1 className="video-detail__title brainflix-title">
        BMX Rampage: 2021 Highlights
      </h1>
      <div className="video-detail__info">
        <div className="video-detail__info__item">
          <h4 className="video-detail__subtitle brainflix-subtitle">
            By Red Cow
          </h4>
          <p className="video-detail__time brainflix-text">07/11/2021</p>
        </div>
        <div className="video-detail__info__item">
          <div className="video-detail__action">
            <img
              className="video-detail__action__icon"
              src={viewsIcon}
              alt="views icon"
            />
            <span className="video-detail__action__count brainflix-text">
              1,001,023
            </span>
          </div>
          <div className="video-detail__action">
            <img
              className="video-detail__action__icon"
              src={likesIcon}
              alt="likes icon"
            />
            <span className="video-detail__action__count brainflix-text">
              110,985
            </span>
          </div>
        </div>
      </div>
      <p className="video-detail__desc brainflix-text">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
      <Comments />
    </div>
  );
}

export default VideoDetail;
