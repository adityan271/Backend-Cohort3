import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="w-30% border border-white flex flex-col gap-3 p-4 rounded-xl">
      <h1>{note.title}</h1>
      <p className="text-xs ">
        {note.description.length > 20
          ? note.description.substring(0, 20)
          : note.description}
      </p>
      <div className="flex justify-between">
        <button className="p-2 bg-yellow-600 text-white rounded">Update</button>
        <button className="p-2 bg-red-600 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
