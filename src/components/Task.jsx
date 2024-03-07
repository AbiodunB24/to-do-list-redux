// Task.js (Individual task component)
import { IoCloseCircleOutline } from "react-icons/io5";
import { deleteTask } from "../redux/actions";

const Task = ({
  id,
  description,
  isDone,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}) => {
  const handleToggle = () => {
    onToggleTask(id); // Calls the onToggleTask function with the task's id when the checkbox is clicked.
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task description:", description);
    if (newDescription) {
      onEditTask(id, newDescription); // Calls the onEditTask function with the task's id and the edited description when the task description is clicked.
    }
  };
  const handleDeleteTask = () => {
    onDeleteTask(id); // Calls the onToggleTask function with the task's id when the checkbox is clicked.
  };

  return (
    <div className="flex text-white w-full mt-5 justify-between items-center gap-2 ">
      <span className="flex items-center justify-center gap-2" onClick={handleEdit}>
      
        <input
          className=""
          type="checkbox"
          checked={isDone}
          onChange={handleToggle}
        />
        <p>{description}</p>
      </span>
      <IoCloseCircleOutline
        onClick={handleDeleteTask}
        className=" text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Task;
