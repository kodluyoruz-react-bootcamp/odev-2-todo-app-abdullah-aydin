import { useState, useEffect } from "react";
//functions
import { completeTodo, deleteTodo } from "../../functions";

function Main({ todos, select }) {
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    let data = [];

    // shows the content of the selected items
    switch (select) {
      case "active":
        todos.forEach((e) => {
          e.isActive && data.push(e);
        });
        break;
      case "completed":
        todos.forEach((e) => {
          !e.isActive && data.push(e);
        });
        break;
      default:
        data.push(...todos);
    }

    setTodoList(data);
  }, [todos, select]);

  // todo items sorts from first item to last item
  todoList.sort(function(a, b) {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  });

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.isActive === false && "completed"}`}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => completeTodo(todo.id, todo.isActive)}
                checked={todo.isActive === false}
              />
              <label>{todo.title}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(todo.id)}
              ></button>
            </div>
          </li>
        ))}
        {todoList.length === 0 && (
          <li
            style={{
              margin: 10,
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "large",
            }}
          >
            there is nothing todo item.
          </li>
        )}
      </ul>
    </div>
  );
}

export default Main;
