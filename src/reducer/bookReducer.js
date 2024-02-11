import { ADD_BOOK, REMOVE_BOOK, RESET_BOOK } from "./actionType";
import { v4 as uuidv4 } from "uuid";

export const initial = []

export const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          book_name: action.payload.book_name,
          author_name: action.payload.author_name,
          category: action.payload.category,
          page_number: action.payload.page_number,
          evaluation: action.payload.evaluation,
        },
      ];
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case RESET_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, completed: !book.completed }
            : book
        ),
      };
    default:
      return state;
  }
};
