import React, { useState } from "react";
import useApi from "../../shared/useApi";
import { useAuthContext } from "../context/useAuthContext";
import { Navigate, useNavigate } from "react-router";

const Register = () => {
  const api = useApi();
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log(response.data)

      authContext.setAccessToken(response.data.accessToken);
      authContext.setUser(response.data.data.user);
      navigate("/profile");


    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ??
          "Registration could not be completed.",
      );
    }
  }

  return (
    <main>
      <form className="flex-col gap-4 " onSubmit={handleSubmit}>
        <input
          className="border p-2 rounded-sm"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded-sm"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 rounded-sm"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p role="alert">{errorMessage}</p>}

        <button className="border p-2 bg-blue-200 rounded-sm" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
