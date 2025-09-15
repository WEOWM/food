import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

function InputBox({
  className = "",
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  ispassworTrue = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={ispassworTrue && showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-full py-2 px-2 border rounded-md"
      />

      {ispassworTrue && (
        <span
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-600"
          onClick={togglePassword}
        >
          {showPassword ? <IoEyeOutline size={20} /> : <FaRegEyeSlash size={20} />}
        </span>
      )}
    </div>
  );
}

export default InputBox;
