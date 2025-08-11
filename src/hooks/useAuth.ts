import { login, studentRegister } from "@/services/apis/auth-service";
import { RegisterResponse, RegisterPayload, LoginPayload, LoginResponse } from "@/utils/types/auth.types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";


interface ErrorRes {
  message: string;
}

const Auth = {
  useLogin : (
  options?: UseMutationOptions<LoginResponse, AxiosError<ErrorRes>, LoginPayload>
) => {
  return useMutation<LoginResponse, AxiosError<ErrorRes>, LoginPayload>({
    mutationFn: login,
    ...options,
  });
},

 useStudentRegister : (
  options?: UseMutationOptions<RegisterResponse, AxiosError<ErrorRes>, RegisterPayload>
) => {
  return useMutation<RegisterResponse, AxiosError<ErrorRes>, RegisterPayload>({
    mutationFn: studentRegister,
    ...options,
  });
}
};

export default Auth;