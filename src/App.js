import { useState, useEffect } from "react";
//components
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";
//firebase
import db from "./config";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState("all"); // select values: all, active, completed

  const selectChange = (e) => {
    setSelect(e);
  };

  // we are listening to the data in the database
  useEffect(() => {
    db.collection("todos").onSnapshot((doc) => {
      let data = [];
      let leftItem = 0;

      doc.forEach((e) => {
        e.data().isActive && leftItem++;
        data.push({ id: e.id, ...e.data() });
      });

      setTodos(data);
      setCount(leftItem);
    });
  }, []);

  return (
    <div className="todoapp">
      <Header />
      <Main todos={todos} select={select} />
      <Footer
        todos={todos}
        count={count}
        select={select}
        selectChange={selectChange}
      />
    </div>
  );
}

export default App;
