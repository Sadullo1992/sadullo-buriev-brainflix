import "./App.scss";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoDetail from "./components/VideoDetail/VideoDeatil";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <div className="container">
        <section className="video-details">
          <VideoDetail />
          <NextVideos />
        </section>
      </div>
    </>
  );
}

export default App;
