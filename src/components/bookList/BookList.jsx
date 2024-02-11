import React, { useContext } from "react";
import { Context } from "../../context/Context";

function BookList() {
  const {
    books: { state, dispatch },
  } = useContext(Context);
  console.log(state);
  return (
    <>
      {state?.map((book) => (
        <div> {book.book_name}</div>
      ))}
      {state}
      <ul role="list">
        <li className="flex justify-between p-3 bg-white shadow-md rounded-md">
          <div className="flex">
            <div className="flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Leslie Alexander
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                leslie.alexander@example.com
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default BookList;
