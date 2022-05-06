import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const Home = ({ addTodo, todos, onDelete }) => {
  return (
    <div>
        <AddTodo addTodo={addTodo}  />
        <Todos todos={todos} onDelete={onDelete}  /> 
    </div>
  );
};

export default Home;
