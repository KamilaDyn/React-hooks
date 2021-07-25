import React from "react";

const BooksInfo = ({ id, onClickHandler, title, author }) => {
  const handleOnClick = () => onClickHandler({ id, type: "REMOVE" });
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={handleOnClick}>Usuń książkę</button>
    </div>
  );
};

export default BooksInfo;
