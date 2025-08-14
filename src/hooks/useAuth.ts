import { axiosClient } from "@/services/axios-client";
import { onSuccess } from "@/utils/notifications/OnSuccess";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { onFailure } from '../utils/notifications/OnFailure';
import { useAuthorize } from "@/context/AuthContext";

const useAuth =()=>{
  const navigate= useNavigate();
  const { saveLogin } = useAuthorize();

 const client= axiosClient(null);

 const loginMutation = useMutation({
  mutationFn: async(credentials)=>{
    const { data }= await client.post("/login", credentials)
    if (!data.token){
      throw new Error("Invalid response: User data not found");
    }
    return data;
  },
  onSuccess: (data)=>{
    saveLogin( data.token , data.role )
    onSuccess({
      message: "Login Successful!",
      success: "Continuing to dashboard"
    });
    navigate("/dashboard");
  },
  onError: ( error ) => {
    console.log( "error" , error)
    onFailure({
      message: error,
      error: "Something went wrong"
    })
  }
 })

 const studentRegisterMutation = useMutation({
  mutationFn: async(credentials)=>{
    const { data }= await client.post("/students/register", credentials)
    if (!data?.data){
      throw new Error("Something went wrong: Please try again");
    }
    return data;
  },
  onSuccess: (data)=>{
    onSuccess({
      message: "Account created successfully!",
      success: "Please check your mail to verify your account and proceed to login"
    });
    navigate("/login");
  },
  onError: ( error ) => {
    onFailure({
      message: error,
      error: "Something went wrong"
    })
  }
 })


 const recruiterRegisterMutation = useMutation({
  mutationFn: async(credentials)=>{
    const { data }= await client.post("/recruiters/register", credentials)
    if (!data?.data){
      throw new Error("Something went wrong: Please try again");
    }
    return data;
  },
  onSuccess: (data)=>{
    onSuccess({
      message: "Account created successfully!",
      success: "Please check your mail to verify your account and proceed to login"
    });
    navigate("/login");
  },
  onError: ( error ) => {
    onFailure({
      message: error,
      error: "Something went wrong"
    })
  }
 })

return {
  login:loginMutation,
  studentRegister: studentRegisterMutation,
  recruiterRegister: recruiterRegisterMutation
}

}

export default useAuth;