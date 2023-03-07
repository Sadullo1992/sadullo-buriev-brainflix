import "./VideoPlayer.scss";

function VideoPlayer() {
  return (
    <section className="video-player">
      <div className="container">
        <div className="video-player__inner">
          <video
            className="video-player__video"
            controls
            poster="https://i.imgur.com/l2Xfgpl.jpg"
          >
            <source src="" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
