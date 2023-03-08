import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import videos from "../data/videos.json";
import videoDetails from "../data/video-details.json";

const mock = new MockAdapter(axios, { delayResponse: 0 });

export default function configureFakeBackend() {
  mock.onGet("/videos").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let id = config.data;
        if (!id) {
          resolve([200, videos]);
        } else {
          let video = videoDetails.find((item) => item.id === id);
          if (video) {
            resolve([200, video]);
          }
        }
      }, 500);
    });
  });
}
