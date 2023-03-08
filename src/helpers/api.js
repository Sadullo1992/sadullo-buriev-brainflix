import axios from "axios";

export default class Api {
  get = async (url) => {
    const [baseUrl, id] = url.split("/");
    return await axios.get(baseUrl, { data: id });
  };
}
