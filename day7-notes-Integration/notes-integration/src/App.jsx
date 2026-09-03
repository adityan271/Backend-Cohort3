import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [updateNoteId, setUpdateNoteId] = useState(null);

  const [allNotes, setAllNotes] = useState([]);
  const handleChange = (e) => {
    setFormValues(
      (
        prev, // keeps old data
      ) => ({ ...prev, [e.target.name]: e.target.value }),
    ); // update current data
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reloading

    if (updateNoteId) {
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues,
      );
      setUpdateNoteId(null)
    } else {
      //api call
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
    }

    setFormValues({
      title: "",
      description: "",
    });
    getAllNotes();
  };

  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("Error in delete note api", error);
    }
  };

  let noteForUpdate = (note) => {
    console.log(note)
    setUpdateNoteId(note._id)
    setFormValues({
      title: note.title,
      description: note.description,
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

      <div className="flex gap-4">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
            noteForUpdate={noteForUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
