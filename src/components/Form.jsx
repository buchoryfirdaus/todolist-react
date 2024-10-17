import PropTypes from "prop-types";

function Form({ addTask, newTask, taskCompleted, tasks }) {
  return (
    <div className="wrapper">
      <header>
        <h3>⚡TODOLIST ⚡</h3>
        <span>
          {taskCompleted || "0"} / {tasks.length}{" "}
        </span>
      </header>

      <form className="input-box">
        <input type="text" placeholder="Add Your Task" ref={newTask} />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
  newTask: PropTypes.object.isRequired,
  taskCompleted: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Form;
