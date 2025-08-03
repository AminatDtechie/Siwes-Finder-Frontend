import axios, { AxiosInstance } from "axios";

export const axiosClient = (token: string | null, multiMedia: boolean = false): AxiosInstance => {
  let headers;

  const contentType = multiMedia ? 'multipart/form-data' : "application/json;charset=utf-8"

  if(token){
   headers = {
      "Content-Type": contentType,
      "Authorization": `Bearer ${token}`,
    }
  } else{
    headers = {
      "Content-Type": contentType,
      // "ngrok-skip-browser-warning":"true",
    };
  
  }

  
  const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers,
    timeout: 60000,
    withCredentials: false,
  });

  return client;
};
