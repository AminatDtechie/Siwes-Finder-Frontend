import { useState, ReactNode, forwardRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface SpecialInputFieldProps {
  type: string;
  placeholder: string;
  icon: ReactNode;
  error: string
}

const SpecialInputField = forwardRef<HTMLInputElement, SpecialInputFieldProps>(
  ({ type, placeholder, icon, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <>
      <div className="relative w-full">
        {/* Left Icon */}
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          {icon}
        </span>

        {/* Input Field */}
        <input
          type={inputType}
          placeholder={placeholder}
          ref={ref}
          {...rest} // ✅ Correctly spread other props like `register`
          className="w-full px-4 py-2 pl-10 pr-10 border rounded-md shadow-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
        />

        {/* Password Toggle Icon */}
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
        
      </div>
      {error && <p className="text-red-500 text-xs mt-[-2px]">{error}</p>}
    </>
    );
  }
);

export default SpecialInputField;
