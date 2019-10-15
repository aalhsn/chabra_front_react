import axios from "axios";

const instance = axios.create({
  baseURL: "https://6424884a.ngrok.io/api/"
});

export default instance;
