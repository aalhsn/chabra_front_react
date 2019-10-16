import axios from "axios";

const instance = axios.create({
  baseURL: "https://chabra.herokuapp.com/api/"
});

export default instance;
