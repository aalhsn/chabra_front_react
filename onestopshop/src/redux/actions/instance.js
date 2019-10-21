import axios from "axios";

const instance = axios.create({
  baseURL: "http://134.209.242.76/api/"
});

export default instance;
