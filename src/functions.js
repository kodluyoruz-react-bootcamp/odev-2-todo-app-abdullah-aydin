import db from "./config";
//notification
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
//add todo item function
const addTodo = (title) => {
  db.collection("todos")
    .add({
      title,
      isActive: true,
      date: new Date(),
    })
    .then(() => {
      toast.success("Item added successfully!");
    })
    .catch(() => toast.error("Could not be added..."));
};

//Todo complete function
const completeTodo = (todoID, isActive) => {
  db.collection("todos")
    .doc(todoID)
    .update({
      isActive: !isActive,
    })
    .then(() => {
      toast.info("Item updated!");
    })
    .catch(() => toast.error("Could not be updated..."));
};

//Todo delete function
const deleteTodo = (todoID) => {
  db.collection("todos")
    .doc(todoID)
    .delete()
    .then(() => {
      toast.error("Item deleted successfully!");
    })
    .catch(() => toast.error("Could not be deleted..."));
};

//notification

export { addTodo, completeTodo, deleteTodo };
