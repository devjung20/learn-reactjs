import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <nav>
        <Link to="todo-page">List Page</Link> <br />
        <Link to=":todoId">Detail Page</Link>
      </nav>

      <Routes>
        <Route path="todo-page" element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
