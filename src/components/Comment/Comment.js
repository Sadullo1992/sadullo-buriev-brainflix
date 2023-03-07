import Avatar from "../Avatar/Avatar";

import "./Comment.scss";

function Comment() {
  return (
    <article className="comment">
      <Avatar />
      <div className="comment__content">
        <div className="comment__header">
          <h5 className="comment__title brainflix-section-title">
            Micheal Lyons
          </h5>
          <p className="comment__time brainflix-text">08/09/2021</p>
        </div>
        <p className="comment__desc brainflix-text">
          They BLEW the ROOF off at their last event, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of an event I have EVER witnessed.
        </p>
      </div>
    </article>
  );
}

export default Comment;
