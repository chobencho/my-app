import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";

// 証明書登録
export const sendCertificateImage = (
  id: string,
  email: string | null,
  data: FormData
): AxiosPromise => {
  return clientImage.post(`/user/verifications`, data, {
    params: { id, email },
  });
};
