/* eslint-disable react/prop-types */
import TodoListButton from "./TodoListButton";

function TodoList({ tasks, setCompleted, move, deleteTask }) {
  tasks.sort((a, b) => b.id - a.id);

  return (
    <div className="wrapper">
      <ul>
        {tasks.map((item, index) => {
          let checkboxComplete = item.complete ? "✅" : "◻️";
          let coretComplete = item.complete ? "strike" : "";

          return (
            <li key={item.id}>
              <div className="left">
                <button onClick={() => setCompleted(item.id)}>
                  {checkboxComplete}
                </button>{" "}
              </div>
              <div className={`center ${coretComplete}`}>{item.task}</div>
              <div className="right">
                <TodoListButton
                  id={item.id}
                  tasks={tasks}
                  index={index}
                  move={move}
                  deleteTask={deleteTask}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
