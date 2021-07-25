import React, { useState } from "react";

const AddNewBook = ({ addHandler }) => {
  const [newBook, setNewBook] = useState({ id: "", title: "", author: "" });

  const setFormData = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = (e) => {
    const newBookItem = {
      id: Math.floor(Math.random() * 1000),
      title: newBook.title,
      author: newBook.author,
    };

    addHandler({ type: "ADD", newBookItem });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnClick}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={setFormData}
      ></input>
      <label htmlFor="auhor">Title</label>
      <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={setFormData}
      ></input>
      <button type="submit">Dodaj książkę </button>
    </form>
  );
};

export default AddNewBook;
