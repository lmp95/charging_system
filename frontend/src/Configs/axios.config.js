import axios from "axios";

const axiosDefault = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_PORT}/v1`,
});

axiosDefault.defaults.headers.post["Content-Type"] = "application/json";

export default axiosDefault;
