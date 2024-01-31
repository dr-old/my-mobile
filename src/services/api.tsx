import apisauce from "apisauce";
import { getCookie } from "cookies-next";

export const BASE_URL = "https://techtest.youapp.ai/";

const createRequest = () => {
  const token = getCookie("accessToken") || null;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
    "x-access-token": token,
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
  createProfile: (params: any) =>
    createRequest().post("api/createProfile", params),
  updateProfile: (params: any) =>
    createRequest().put("api/updateProfile", params),
  getProfile: (params: any) => createRequest().get("api/getProfile", params),
};

export default api;
