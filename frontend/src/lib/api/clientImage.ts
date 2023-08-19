import axios, { AxiosInstance, AxiosResponse } from "axios";

let clientImage: AxiosInstance;

export default clientImage = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "multipart/form-data", // 画像ファイルを取り扱うのでform-dataで送信
  },
});

clientImage.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data;
    return { ...response.data, data };
  }
);
