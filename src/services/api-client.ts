import axios, { CanceledError, AxiosRequestConfig } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ea6c1f64870415f80faf9781370d602",
  },
});

export { CanceledError };
export type { AxiosRequestConfig };
