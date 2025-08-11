import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "@/utils/types/auth.types";
import { axiosClient } from "../axios-client";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const client = axiosClient(null);
  const { data } = await client.post("/login", payload);
  return data;
};


export const studentRegister = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const client = axiosClient(null);
  const { data } = await client.post("/students/register", payload);
  return data;
};