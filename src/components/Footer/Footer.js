//functions
import { deleteTodo } from "../../functions";

function Footer({ todos, count, select, selectChange }) {
  
  const clearCompleted = () => {
    todos.forEach((todo) => {
      !todo.isActive && deleteTodo(todo.id);
    });
  };

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{`${count} items left`}</strong>
      </span>
      <ul className="filters">
        <li>
          <button
            className={`${select === "all" && "selected"}`}
            onClick={() => selectChange("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${select === "active" && "selected"}`}
            onClick={() => selectChange("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={`${select === "completed" && "selected"}`}
            onClick={() => selectChange("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
