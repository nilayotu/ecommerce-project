import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import api from "../store/api";
import { setUser } from "../store/reducers/clientReducer";
import Gravatar from "react-gravatar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      const userData = {
        name: response.data.name,
        email: response.data.email,
        role_id: response.data.role_id,
        token: response.data.token,
      };

      // Redux store'a kaydet
      dispatch(setUser(userData));

      // Remember me işaretli ise token localStorage'a
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      }

      // Önceki sayfaya yönlendir, yoksa ana sayfa
      const redirectTo = location.state?.from || "/";
      history.push(redirectTo);

      toast.success("Login successful!");
    } catch (err) {
      console.error("Login failed:", err);

      // Hata mesajını garantiye al
      const message =
        err.response?.data?.message ||
        err.response?.statusText ||
        "Login failed. Check credentials.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-600">
            Remember Me
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Gravatar preview */}
      <div className="mt-6 text-center">
        <p>Profile preview (Gravatar by email):</p>
        <Gravatar
          email={watch("email") || ""}
          size={80}
          default="identicon"
          className="mx-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;