import axios from "axios";

const instance = axios.create({
  baseURL: "https://e5f9a584.ngrok.io/api/"
});

export default instance;
