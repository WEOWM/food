import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import InputBox from "../../components/input/InputBox";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();

  const [signform, setSignForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!signform.fullName || !signform.email || !signform.password) {
      toast.error("All fields are required!");
      return;
    }

    // Save user
    localStorage.setItem("signup", JSON.stringify(signform));
    toast.success("User registered successfully!");
    setTimeout(() => navigate("/home"), 1500); // navigate after toast
  };

  useEffect(() => {
    const token = !!localStorage.getItem("signup");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div
      className="w-full h-screen flex justify-center items-center 
      bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 
      animate-gradient-x"
    >
      <div className="w-full max-w-md p-8 bg-amber-50 rounded-xl shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Sign Up</h2>

        <InputBox
          name="fullName"
          value={signform.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="mb-4 w-full"
        />

        <InputBox
          name="email"
          value={signform.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-4 w-full"
        />

        <InputBox
          name="password"
          type="password"
          value={signform.password}
          onChange={handleChange}
          placeholder="Password"
          className="mb-6 w-full"
          ispassworTrue={true}
        />

        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow hover:scale-105 transform transition"
        >
          Sign Up
        </Button>

        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 font-semibold cursor-pointer hover:underline"
          >
            Sign In
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

export default SignUp;
