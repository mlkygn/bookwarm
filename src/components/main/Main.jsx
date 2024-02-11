import React from "react";
import BookList from "../bookList/BookList";
import Form from "../form/Form";

function Main() {
  return (
    <>
      <main>
        <div className="container mx-auto py-5 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section className="px-3">
              <BookList />
            </section>
            <section className="px-3">
              <Form />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
