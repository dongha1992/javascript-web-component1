import axios from "axios";

type AxiosRequestHeaders = {
  [x: string]: string | number | boolean;
};

export default async function request({
  method,
  url,
  data,
  headers,
}: {
  method: string;
  url: string;
  data?: object[];
  headers?: AxiosRequestHeaders;
}): Promise<void> {
  const result = await axios({
    method,
    url,
    data,
    headers,
  });

  return result.data;
}
