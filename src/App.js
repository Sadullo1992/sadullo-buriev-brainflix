import React, { useState, useEffect, useCallback } from "react";
import Api from "./helpers/api";

import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoDetail from "./components/VideoDetail/VideoDeatil";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

import "./App.scss";

const api = new Api();

function App() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState({});
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
      setSelectedVideo(fetchedVideos[0]);
    };
    getVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await api.get("videos");
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    const getActiveVideo = async (id) => {
      const fetchedActiveVideo = await fetchActiveVideo(id);
      setActiveVideo(fetchedActiveVideo);
    };
    getActiveVideo(selectedVideo.id);
  }, [selectedVideo]);

  const fetchActiveVideo = async (id) => {
    const res = await api.get(`videos/${id}`);
    const data = await res.data;
    return data;
  };

  const onSelectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  return (
    <>
      <Header />
      <VideoPlayer activeVideo={activeVideo} />
      <div className="container">
        <section className="video-details">
          <VideoDetail activeVideo={activeVideo} />
          <NextVideos
            onClickVideo={onSelectVideo}
            nextVideos={videos.filter((item) => item.id !== selectedVideo.id)}
          />
        </section>
      </div>
    </>
  );
}

export default App;
