import React, { useEffect, useReducer } from "react";
import BooksInfo from "./BooksInfo";
import AddNewBook from "./AddNewBook";

const myBooks = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowlling" },
  { id: 2, title: "Wojny Makowe", author: "Rebecca F.Kuang" },
  { id: 3, title: "Tatuażysta z Auschwitz", author: "Heather Morris" },
  { id: 4, title: "Igrzyska Śmierci", author: "Suzanne Collins" },
  { id: 5, title: "Pani Jezioroa Wiedźmin", author: "Andrzej Sapkowski" },
];

const booksReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newBookItem];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "FETCH":
      return action.data;
    default:
      throw new Error("Something went wrong");
  }
};

const fetchAsyncData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
const Books = () => {
  const [state, dispatch] = useReducer(booksReducer, []);

  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: "FETCH", data: myBooks });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <div>
      {state.map((book) => {
        return <BooksInfo key={book.id} onClickHandler={dispatch} {...book} />;
      })}
      <AddNewBook addHandler={dispatch} />
    </div>
  );
};
export default Books;
