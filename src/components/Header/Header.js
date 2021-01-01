import { useState, memo } from "react";
//functions
import { addTodo } from "../../functions";

function Header() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done"
          value={title}
          autoFocus
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default memo(Header);
