import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormValues(
      (
        prev, // keeps old data
      ) => ({ ...prev, [e.target.name]: e.target.value }),
    ); // update current data
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reloading

    //api call
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );

    setFormValues({
      title: "",
      description: "",
    });
  };

  return (
    <div className="h-screen p-5 flex flex-col gap-10">
      <h1 className="text-3xl">Notes app</h1>

      <form
        onSubmit={handleSubmit}
        className="gap-5 flex flex-col w-70 border p-4 border-white rounded-xl"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="p-2 outline-none text-xl border border-white rounded"
          type="text"
          placeholder="Title"
          
        />
        <input
          onChange={handleChange}
          name="description"
          value={formValues.description}
          className="p-2 outline-none text-xl border border-white rounded"
          type="text"
          placeholder="description"
          minLength={20}
          required 
        />
        <button className="bg-blue-600 p-2 text-xl rounded">Add Note</button>
      </form>
    </div>
  );
};

export default App;
