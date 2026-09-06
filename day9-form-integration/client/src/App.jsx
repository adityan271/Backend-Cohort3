import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let {register,reset,handleSubmit,} = useForm();

  const submitHandler = (data)=>{
    console.log(data)
  }
  return (
    <div>
      <form  onSubmit={handleSubmit(submitHandler)}>
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <input type="file" placeholder="upload your profile pic" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
