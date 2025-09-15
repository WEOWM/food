import React, { useState } from "react";
import InputBox from "../../components/input/InputBox";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [signinform, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("signup"));

    if (!signinform.email || !signinform.password) {
      toast.error("All fields are required!");
      return;
    }

    if (user && user.email === signinform.email && user.password === signinform.password) {
      toast.success("Login Success!");
      navigate("/home");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center 
      bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 
      animate-gradient-x"
    >
      <div className="w-full max-w-md p-8 bg-amber-50 rounded-xl shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Sign In</h2>
        <InputBox
          name="email"
          value={signinform.email}
          onChange={handleChange}
          className="mb-4 w-full"
          placeholder="Email"
        />
        <InputBox
          name="password"
          type="password"
          value={signinform.password}
          onChange={handleChange}
          className="mb-6 w-full"
          placeholder="Password"
          ispassworTrue={true}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow hover:scale-105 transform transition"
        >
          Sign In
        </Button>
        <p className="mt-4 text-gray-700">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-red-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default SignIn;
