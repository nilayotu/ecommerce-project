import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-lg mx-auto mt-10">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Toggle butonları */}
      <div className="flex justify-center mb-6 gap-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 font-bold rounded ${isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 font-bold rounded ${!isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Signup
        </button>
      </div>

      {/* Formlar */}
      <div>
        {isLogin ? <LoginPage /> : <SignupPage />}
      </div>
    </div>
  );
};

export default AuthPage;