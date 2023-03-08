import { format } from "date-fns";

import Avatar from "../Avatar/Avatar";

import "./Comment.scss";

function Comment({ coment }) {
  const { name, comment, timestamp } = coment;
  return (
    <article className="comment">
      <Avatar />
      <div className="comment__content">
        <div className="comment__header">
          <h5 className="comment__title brainflix-section-title">{name}</h5>
          <p className="comment__time brainflix-text">
            {format(new Date(timestamp ?? null), "dd/mm/yyyy")}
          </p>
        </div>
        <p className="comment__desc brainflix-text">{comment}</p>
      </div>
    </article>
  );
}

export default Comment;
