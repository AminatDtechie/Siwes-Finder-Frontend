import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiArrowLeft, FiLock, FiMail } from "react-icons/fi";
import SpecialInputField from "../SpecialInputField";
import { FaSpinner } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const StudentForm = ({ toggleOption }) => {
  const { signUp, isLoading } = useAuth(); // Signup mutation

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data) => {
    const { confirmPassword, ...signupData } = data;
    if (confirmPassword !== password) return;

    // Proceed with signup API call
    signUp({ role_id: 3, ...signupData });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="z-[100] w-[90%] max-w-md flex flex-col gap-1 items-center bg-white min-h-80 rounded-2xl p-6 pb-8 shadow-lg relative"
    >
      {/* Back Icon */}
      <button
        onClick={() => toggleOption(null)}
        className="absolute top-4 left-4 text-gray-600 hover:text-primary transition"
      >
        <FiArrowLeft size={24} />
      </button>

      {/* Logo */}
      <div className="flex justify-center">
        <Link to="/" className="text-3xl font-bold text-blue-800 tracking-wide">
          SiwesFinder
        </Link>
      </div>

      {/* Form Heading */}
      <h2 className="self-start text-xl font-semibold mt-1">
        <span className="text-primary">Hey</span> There!!!
      </h2>
      <p className="self-start text-gray-600 text-sm mb-3">
        Fill in details below to create an account with us.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-sm flex flex-col w-full"
      >
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("first_name", {
                required: "First Name is required",
              })}
              className="input-field"
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">
                {typeof errors.first_name?.message === "string"
                  ? errors.first_name.message
                  : ""}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("last_name", { required: "Last Name is required" })}
              className="input-field"
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">
                {typeof errors.last_name?.message === "string"
                  ? errors.last_name.message
                  : ""}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <SpecialInputField
          type="email"
          placeholder="Email Address"
          icon={<FiMail />}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          error={
            typeof errors.email?.message === "string"
              ? errors.email.message
              : ""
          }
        />

        {/* Password */}
        <SpecialInputField
          type="password"
          placeholder="Password"
          icon={<FiLock />}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must not exceed 20 characters ",
            },
          })}
          error={
            typeof errors.password?.message === "string"
              ? errors.password.message
              : ""
          }
        />

        {/* Confirm Password */}
        <SpecialInputField
          type="password"
          placeholder="Confirm Password"
          icon={<FiLock />}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "passwords do not match",
          })}
          error={
            typeof errors.confirmPassword?.message === "string"
              ? errors.confirmPassword.message
              : ""
          } // Displays error if passwords do not match
        />

        {/* Terms and Conditions */}
        <div className="flex items-center justify-center text-xs md:text-sm mx-auto">
          <input
            type="checkbox"
            {...register("terms", { required: "You must accept the terms" })}
            className="mr-2 cursor-pointer"
          />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="text-primary font-medium">
              Terms and Conditions
            </a>
          </span>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-xs mt-1 text-center">
            {typeof errors.terms?.message === "string"
              ? errors.terms.message
              : ""}
          </p>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading?.signUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto min-w-40 border-2 border-primary font-medium text-primary py-2 rounded-full shadow-md flex items-center justify-center gap-2 hover:text-white hover:bg-primary transition"
        >
          <span>Get Started </span>
          {isLoading?.signUp && <FaSpinner className="animate-spin" />}
        </motion.button>
      </form>

      {/* Alternative Signup Option */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Or{" "}
        <span
          onClick={() => toggleOption("promoter")}
          className="cursor-pointer text-primary font-medium"
        >
          Sign Up as a Promoter
        </span>
      </p>
    </motion.div>
  );
};

export default StudentForm;
