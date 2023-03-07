import "./Avatar.scss";

function Avatar({ src }) {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: "#e1e1e1",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Avatar;
