import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("images", data.images[0]);

    await axios.post("http://localhost:3000/user/create", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <br />
        <input
          {...register("email")}
          type="text"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <input
          {...register("images")}
          multiple
          type="file"
          placeholder="Upload your profile pic"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
