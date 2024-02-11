import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { ADD_BOOK } from "../../reducer";

function Form() {
  const {
    books: { state, dispatch },
  } = useContext(Context);
  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let payload = {};
    for (var pair of formData.entries()) {
      payload[pair[0]] = pair[1];
    }
    dispatch({
      type: ADD_BOOK,
      payload: payload,
    });
    console.log(payload)   
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="book_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="book_name"
                id="book_name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="author_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Author Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="author_name"
                id="author_name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Novel</option>
                <option>Self-improvement</option>
                <option>History</option>
                <option>Literary</option>
                <option>Art</option>
                <option>Philosophy</option>
                <option>Science</option>
                <option>Comic book</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="page_number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Page Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="page_number"
                id="page_number"
                autoComplete="page_number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="evaluation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Evaluation
            </label>
            <div className="mt-2">
              <textarea
                id="evaluation"
                name="evaluation"
                rows="3"
                defaultValue="Write a few sentences about book"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600"></p>
          </div>
          <button className="col-span-full">Ekle</button>
        </div>
      </form>
    </>
  );
}

export default Form;
