import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";

import "./Comments.scss";

import add_commentIcon from "../../assets/icons/add_comment.svg";
import avatarBg from "../../assets/images/Mohan-muruge.jpg";

function Comments() {
  return (
    <div className="comments">
      <h4 className="comments__title brainflix-subtitle">3 Comments</h4>
      <div className="comments__creation">
        <Avatar src={avatarBg} />
        <form className="comments__creation__form">
          <div className="comments__creation__form__input__wrapper">
            <label className="brainflix-label-text" htmlFor="add-comment">
              JOIN THE CONVERSATION
            </label>
            <br />
            <textarea
              name="add-comment"
              id="add-comment"
              placeholder="Add a new comment"
              className="brainflix-text"
            ></textarea>
          </div>
          <Button src={add_commentIcon} text={"Comment"} />
        </form>
      </div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
