import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const newTask = useRef("");
  const STORAGE = "TODOLIST_APP";
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((item) => item.complete == true).length;
    setTaskCompleted(complete);
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.current.value === "") {
      alert("hey bro, you don't add task");
      return false;
    }

    const setId = () => {
      if (tasks == "") {
        return 1;
      } else {
        return tasks[0].id + 1;
      }
    };

    const data = {
      id: setId(),
      task: newTask.current.value,
      complete: false,
    };
    setTasks((prevTasks) => [...prevTasks, data]);
    newTask.current.value = "";
  };

  const setCompleted = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const move = (currentIndex, updateIndex) => {
    if (
      currentIndex < 0 ||
      currentIndex >= tasks.length ||
      updateIndex < 0 ||
      updateIndex >= tasks.length
    ) {
      return;
    }

    let currentData = tasks[currentIndex];
    let updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    let newData = [...tasks];
    setTasks(newData);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      setTasks(tasks.filter((item) => item.id !== id));
    }
  };
  const [taskCompleted, setTaskCompleted] = useState(0);

  return (
    <>
      <Form
        addTask={addTask}
        newTask={newTask}
        taskCompleted={taskCompleted}
        tasks={tasks}
      />
      <TodoList
        tasks={tasks}
        setCompleted={setCompleted}
        move={move}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
