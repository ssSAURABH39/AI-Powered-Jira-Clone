export const TaskBoard = ({ employees, taskList }) => {
  return (
    <div className="bg-white mt-10 p-6 rounded-xl shadow-xl">
      <h3 className="text-3xl font-bold mb-5 text-center text-indigo-700">Task Board</h3>
      <ul className="flex flex-wrap justify-between gap-6">
        {taskList.map((task) => (
          <li
            className="bg-gradient-to-br from-indigo-50 to-purple-100 p-5 rounded-xl shadow-md w-full md:w-1/3 hover:shadow-xl transition-all duration-300"
            key={task.taskTitle}
          >
            <p className="mb-1 text-gray-800"><strong>Emp Name:</strong> {task.assignedEmp}</p>
            <p className="mb-1 text-gray-800"><strong>Task Title:</strong> {task.taskTitle}</p>
            <p className="mb-1 text-gray-800"><strong>Task Desc:</strong> {task.taskDesc}</p>
            <p className="font-bold text-indigo-600"><strong>Predicted Time:</strong> {task.estimatedTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
