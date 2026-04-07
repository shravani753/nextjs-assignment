"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});

  // Handle input change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    try {
      await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Form submitted successfully!");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        {/* NAME */}
        <div>
          <input
            name="name"
            value={form.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            value={form.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            name="phone"
            value={form.phone}
            maxLength={10}
            placeholder="Enter your phone"
            onChange={(e) => {
              const value = e.target.value;

              // Allow only digits
              if (/^[0-9]*$/.test(value)) {
                setForm({ ...form, phone: value });
              }
            }}
            className="border p-2 w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <button className="bg-purple-600 text-white px-6 py-2 rounded">
          Submit
        </button>

      </form>
    </section>
  );
}