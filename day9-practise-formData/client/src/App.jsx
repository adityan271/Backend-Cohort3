import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
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
          {...register("profile_pic")}
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
