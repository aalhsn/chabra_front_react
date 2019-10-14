import axios from "axios";

const instance = axios.create({
  baseURL: "http://5eda5225.ngrok.io/api/"
});

export default instance;
