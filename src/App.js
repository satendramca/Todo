// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import AddTodo from "./MyComponent/AddTodo";
import Home from "./MyComponent/Home";
import Todos from "./MyComponent/Todos";
import About from "./MyComponent/About";
import React, { useState, useEffect } from "react";
// import React from "react";
import {
  BrowserRouter ,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
  
  
    const onDelete = (todo) => {
      console.log("I am ondelete of todo", todo);
      
  
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("deleted", todos)
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    const addTodo = (title, desc) => {
      console.log("I am adding this todo", title, desc)
      let sno;
      if (todos.length === 0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
  
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return(
    <> 
    <BrowserRouter>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>

          <Route path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete} />}/>
          <Route path="/about" element={<About />}/>
            
  
          </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )


}

export default App;