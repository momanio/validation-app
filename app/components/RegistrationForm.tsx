"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNumber: string;
  address: string;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  // Watch the password value to compare it with confirmPassword
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 font-semibold mb-2"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="mobileNumber"
          className="block text-gray-700 font-semibold mb-2"
        >
          Mobile Number
        </label>
        <input
          id="mobileNumber"
          type="text"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("mobileNumber", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Invalid mobile number format",
            },
          })}
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobileNumber.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 font-semibold mb-2"
        >
          Address
        </label>
        <textarea
          id="address"
          className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
