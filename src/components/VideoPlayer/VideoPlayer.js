import "./VideoPlayer.scss";

function VideoPlayer({ activeVideo }) {
  const { image, video } = activeVideo;
  return (
    <section className="video-player">
      <div className="container">
        <div className="video-player__inner">
          <video className="video-player__video" controls poster={image}>
            <source src={video} />
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
