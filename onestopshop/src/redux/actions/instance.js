import axios from "axios";

const instance = axios.create({
  baseURL: "http://e5f9a584.ngrok.io/api/"
});

export default instance;
