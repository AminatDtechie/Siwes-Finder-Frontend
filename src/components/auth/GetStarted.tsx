import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RecruiterForm from "./RecruiterForm";
import StudentForm from "./StudentForm";

const GetStarted = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleOption = (option: string | null) => setSelectedOption(option);

  if (selectedOption === "recruiter") {
    return <RecruiterForm toggleOption={toggleOption} />;
  }

  if (selectedOption === "student") {
    return <StudentForm toggleOption={toggleOption} />;
  }

  return (
    <div className="z-[100] w-[90%] max-w-md flex flex-col gap-5 items-center bg-white min-h-80 rounded-2xl py-6 pb-8 shadow-lg">
      <Link to="/" className="text-3xl font-bold text-blue-800 tracking-wide">
        SiwesFinder
      </Link>

      <div className="w-[80%] text-center">
        <p className="text-3xl font-semibold">
          <span className="text-primary">Welcome!</span>
        </p>
        <p className="text-sm text-gray-500 my-3">
          Choose how you'd like to get started with SiwesFinder.
        </p>
      </div>

      {/* Recruiter Option */}
      <motion.div
        onClick={() => setSelectedOption("recruiter")}
        className="w-[80%] min-h-20 p-5 border border-gray-300 flex items-center text-gray-700 rounded-xl cursor-pointer relative overflow-hidden"
        whileHover={{
          scale: 1.06,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
        <figure className="rounded-full w-max h-max p-3 border border-primary text-primary bg-white relative z-10">
          <FiUserPlus size={30} />
        </figure>
        <article className="px-4 relative z-10">
          <h2 className="font-semibold text-lg">Company</h2>
          <p className="text-sm text-gray-500">Sign up to post opportunities</p>
        </article>
      </motion.div>

      {/* Student Option */}
      <motion.div
        onClick={() => setSelectedOption("student")}
        className="w-[80%] min-h-20 p-5 border border-gray-300 flex items-center text-gray-700 rounded-xl cursor-pointer relative overflow-hidden"
        whileHover={{
          scale: 1.06,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
        <figure className="rounded-full w-max h-max p-3 border border-green-600 text-green-600 bg-white relative z-10">
          <FiUserPlus size={30} />
        </figure>
        <article className="px-4 relative z-10">
          <h2 className="font-semibold text-lg">Student</h2>
          <p className="text-sm text-gray-500">
            Sign up to find SIWES placements
          </p>
        </article>
      </motion.div>

      <small className="text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-bold">
          Log In Here
        </Link>
      </small>
    </div>
  );
};

export default GetStarted;
