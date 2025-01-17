import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { todo } from "./store/todoStore";
import { useRecoilState } from "recoil";

function App() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useRecoilState(todo);
  // const [todoList, settodoList] = useState([
  //   {
  //     id: 1,
  //     name: "Name1",
  //     counter: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Name2",
  //     counter: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Name3",
  //     counter: 0,
  //   },
  // ]);

  return (
    <>
      <div>home</div>
      {todoList.map((todo, idx) => {
        return (
          <div key={`div0${idx}`}>
            <div
              key={`div1${idx}`}
              style={{ border: "1px solid black", padding: "4px" }}
            >
              <span
                key={`span1${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                {todo.name}
              </span>
              <span
                key={`span2${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Votes
              </span>
              <button
                key={`button1${idx}`}
                onClick={() => {
                  setTodoList((old) => {
                    const newTodoList = old.map((counter) => {
                      const newTodo = { ...counter };
                      if (newTodo.id === idx + 1) {
                        return { ...newTodo, vote: newTodo.vote + 1 };
                      }
                      return { ...newTodo };
                    });
                    return newTodoList;
                  });
                }}
              >
                +
              </button>
              <span key={`span3${idx}`}>{todo.vote}</span>
              <button
                key={`button2${idx}`}
                onClick={() => {
                  setTodoList((old) => {
                    const newTodoList = old.map((counter) => {
                      const newTodo = { ...counter };
                      if (newTodo.id === idx + 1) {
                        return { ...newTodo, vote: newTodo.vote - 1 };
                      }
                      return { ...newTodo };
                    });
                    return newTodoList;
                  });
                }}
              >
                -
              </button>
              <button
                key={`button3${idx}`}
                style={{ marginLeft: "10px" }}
                onClick={() => navigate(`/detail/${todo.id}`)}
              >
                detail
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
