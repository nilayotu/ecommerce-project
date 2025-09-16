import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../store/api";

const SignupPage = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const selectedRole = watch("role_id");

  // Roller çekiliyor
  useEffect(() => {
    api
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
      })
      .catch((err) => {
        console.error("Roles fetch error:", err);
      });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      // Eğer Store seçildiyse store alanlarını ekle
      let payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      // Store id’si örnek: 2 (backend’e göre değişebilir)
      if (Number(data.role_id) === 2) {
        payload.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTax,
          bank_account: data.storeBank,
        };
      }

      await api.post("/signup", payload);

      // Başarılı ise redirect
      alert("You need to click link in email to activate your account!");
      history.goBack();
      reset();
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true, minLength: 3 })}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              Name must be at least 3 characters
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
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
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  "Min 8 chars, include upper, lower, number, special char",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Role */}
        <div>
          <select
            {...register("role_id")}
            className="w-full border p-2 rounded"
            defaultValue={roles.find((r) => r.name === "Customer")?.id || ""}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Eğer Store seçildiyse ek alanlar (id = 2) */}
        {Number(selectedRole) === 2 && (
          <div className="space-y-4 border p-4 rounded bg-gray-50">
            <div>
              <input
                type="text"
                placeholder="Store Name"
                {...register("storeName", { required: true, minLength: 3 })}
                className="w-full border p-2 rounded"
              />
              {errors.storeName && (
                <span className="text-red-500 text-sm">
                  Store name must be at least 3 characters
                </span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Store Phone (+905XXXXXXXXX)"
                {...register("storePhone", {
                  required: true,
                  pattern: {
                    value: /^\+90\d{10}$/,
                    message: "Invalid Turkish phone number",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.storePhone && (
                <span className="text-red-500 text-sm">
                  {errors.storePhone.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Tax ID (TXXXXVXXXXXX)"
                {...register("storeTax", {
                  required: true,
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Invalid Tax ID format",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.storeTax && (
                <span className="text-red-500 text-sm">
                  {errors.storeTax.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Bank Account (IBAN)"
                {...register("storeBank", {
                  required: true,
                  pattern: {
                    value: /^TR\d{24}$/,
                    message: "Invalid IBAN format",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.storeBank && (
                <span className="text-red-500 text-sm">
                  {errors.storeBank.message}
                </span>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;