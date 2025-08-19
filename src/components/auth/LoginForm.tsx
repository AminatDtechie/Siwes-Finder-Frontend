import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import SpecialInputField from "@/components/SpecialInputField";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
  const {login}= useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data || !data.email || !data.password) {
      console.error("Invalid form submission: Missing email or password.");
      return;
    }

    login.mutate(data)

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="z-[100] relative w-[90%] max-w-96 flex flex-col gap-1 items-center bg-white min-h-80 rounded-2xl p-6 pb-8 shadow-lg"
    >
      <div className="flex justify-center">
        <Link to="/" className="text-3xl font-bold text-blue-800 tracking-wide">
          SiwesFinder
        </Link>
      </div>

      <h2 className="self-start text-xl font-semibold mt-1">
        <span className="text-primary">Hey</span> Friend!!!
      </h2>
      <p className="self-start text-gray-600 text-sm mb-3">
        Enter your details below to log into your account.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 text-sm flex flex-col w-full"
      >
        {/* Email Input */}
        <div>
          <SpecialInputField
            type="email"
            placeholder="Email Address"
            icon={<FiMail />}
            {...register("email", { required: "Email is required" })}
            error={
              typeof errors.email?.message === "string"
                ? errors.email.message
                : errors.email
                ? String(errors.email.message)
                : ""
            }
          />
        </div>

        <div>
          <SpecialInputField
            type="password"
            placeholder="Password"
            icon={<FiLock />}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters ",
              },
            })}
            error={
              typeof errors.password?.message === "string"
                ? errors.password.message
                : errors.password
                ? String(errors.password.message)
                : ""
            }
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center justify-center text-xs md:text-sm mx-auto">
          <input
            type="checkbox"
            {...register("terms", { required: "Please accept the terms to continue." })}
            className="mr-2 cursor-pointer"
          />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="text-primary font-medium underline">
              Terms and Conditions
            </a>
          </span>
        </div>
        {errors.terms?.message && (
          <p className="text-red-500 text-xs mt-1 text-center">
            {String(errors.terms.message)}
          </p>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={login.isPending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto min-w-40 border-2 border-primary font-medium py-2 rounded-full shadow-md transition text-primary hover:bg-primary hover:text-white"
        >
          {login.isPending ? "Logging in" : "Login"}
        </motion.button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-4">
        Don't have an account yet?{" "}
        <Link
          to="/registration"
          className="cursor-pointer text-primary font-medium"
        >
          Create one
        </Link>
      </p>
    </motion.div>
  );
};

export default LoginForm;
