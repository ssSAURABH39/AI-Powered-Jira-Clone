import { useState } from "react";
import axios from "axios";

export const TaskManagement = ({ employees }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [assignedEmp, setAssignEmp] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [predictingTime, setPredictingTime] = useState(null);

  const handleTaskSuggestion = async () => {
    if (taskTitle.length > 3) {
      try {
        const response = await axios.post("http://localhost:5500/api/task/suggest", { input: taskTitle });
        setSuggestions(response.data.suggestions.split("\n"));
      } catch (error) {
        console.log("Error while fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

const handleAssignTask=async(e)=>{
    try {
        const res =await axios.post("http://localhost:5500/api/task/createTask",
            {taskTitle, taskDesc, assignedEmp});
            setTaskTitle("");
            setTaskDesc("");
            setAssignEmp("");
            setSuggestions([])
    } catch (error) {
        console.log("Error creating task:",error);
    }
}

  return (
    <div className="task-wrapper bg-white shadow-lg rounded-2xl p-6 w-7/12 transition duration-300 hover:scale-[1.01]">
  <h2 className="text-3xl text-center font-semibold mb-5">Assign Task</h2>

  <div className="input-group mb-4">
    <label className="block mb-2">Enter Task Title</label>
    <input
      type="text"
      placeholder="Enter Task Title"
      className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      value={taskTitle}
      onChange={(e) => setTaskTitle(e.target.value)}
    />
    {suggestions.length > 0 && (
      <ul className="bg-gray-100 border border-gray-300 mt-2 rounded-md max-h-40 overflow-y-auto">
        {suggestions.map((s, i) => (
          <li
            key={i}
            className="p-2 hover:bg-indigo-100 cursor-pointer rounded-md"
            onClick={() => setTaskTitle(s)}
          >
            {s}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="input-group mb-4">
    <label className="block mb-2">Enter Task Description</label>
    <textarea
      placeholder="Enter Task Description"
      className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
      rows={4}
      value={taskDesc}
      onChange={(e) => setTaskDesc(e.target.value)}
    />
  </div>

  <div className="input-group mb-4">
    <label className="block mb-2">Select Emp</label>
    <select
      className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
      value={assignedEmp}
      onChange={(e) => setAssignEmp(e.target.value)}
    >
      <option value="" disabled>
        Select Employee
      </option>
      {employees.map((emp, index) => (
        <option key={emp.empId || emp._id || index} value={emp.empName}>
          {emp.empName}
        </option>
      ))}
    </select>
  </div>

  <div className="btn-group text-center">
    <button
      onClick={handleAssignTask}
      className="w-1/2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white font-semibold py-3 rounded-md shadow"
    >
      Assign Task
    </button>
    <button
      onClick={handleTaskSuggestion}
      className="w-1/3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white font-semibold py-3 rounded-md shadow ml-3"
    >
      Generate AI Task Suggestions
    </button>
  </div>
</div>
  );
};