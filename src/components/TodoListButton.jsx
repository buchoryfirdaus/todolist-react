import PropTypes from "prop-types";

function TodoListButton(props) {
  let currentIndex = props.index;
  let nextIndex = currentIndex + 1;
  let prevIndex = currentIndex - 1;
  let prevButton = "";
  if (props.tasks[prevIndex] !== undefined) {
    prevButton = "👆";
  } else {
    prevIndex = null;
  }

  let nextButton = "";
  if (props.tasks[nextIndex] !== undefined) {
    nextButton = "👇";
  } else {
    nextIndex = null;
  }

  return (
    <>
      {prevButton !== "" ? (
        <span>
          <button
            onClick={() =>
              prevIndex !== null && props.move(currentIndex, prevIndex)
            }
          >
            {prevButton}
          </button>
        </span>
      ) : null}
      {nextButton !== "" ? (
        <span>
          <button
            onClick={() =>
              nextIndex !== null && props.move(currentIndex, nextIndex)
            }
          >
            {nextButton}
          </button>
        </span>
      ) : null}
      <span>
        <button onClick={() => props.deleteTask(props.id)}>❌</button>
      </span>
    </>
  );
}

TodoListButton.propTypes = {
  id: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoListButton;
