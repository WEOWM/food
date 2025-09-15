import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 border mt-2 rounded-md bg-green-300 hover:bg-green-400 duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
