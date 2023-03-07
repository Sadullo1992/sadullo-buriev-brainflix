import "./Button.scss";

function Button({ src, text }) {
  return (
    <button className="btn">
      <img className="btn__icon" src={src} alt="button icon" />
      <span className="btn__text brainflix-label-text">{text}</span>
    </button>
  );
}

export default Button;
