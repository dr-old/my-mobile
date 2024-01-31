import apisauce from "apisauce";

export const BASE_URL = "https://techtest.youapp.ai/";

const createRequest = () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  };
  const request = apisauce.create({
    baseURL: BASE_URL,
    headers,
    timeout: 10000,
  });

  return request;
};

const api = {
  login: (params: any) => createRequest().post("api/login", params),
  register: (params: any) => createRequest().post("api/register", params),
};

export default api;
