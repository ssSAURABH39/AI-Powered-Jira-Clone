import axios from "axios";
import { useState } from "react";

export const EmployeeManagement = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empSkills, setEmpSkills] = useState("");

  const handleAddEmp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5500/api/emp/create", { empId, empName, empSkills });
      setEmpId("");
      setEmpName("");
      setEmpSkills("");
    } catch (error) {
      console.log("Error creating new Emp:", error);
    }
  };

  return (
    <div className="emp-wrapper bg-white shadow-lg rounded-2xl p-6 w-1/3 transition duration-300 hover:scale-[1.01]">
      <h2 className="text-3xl text-center font-semibold mb-5">Add Employee</h2>
      <div className="input-group mb-4">
        <label className="block mb-2">Enter Emp ID</label>
        <input
          type="text"
          placeholder="Enter Emp ID"
          className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
      </div>
      <div className="input-group mb-4">
        <label className="block mb-2">Enter Emp Name</label>
        <input
          type="text"
          placeholder="Enter Emp Name"
          className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />
      </div>
      <div className="input-group mb-4">
        <label className="block mb-2">Enter Emp Skills</label>
        <input
          type="text"
          placeholder="Enter Emp Skills"
          className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={empSkills}
          onChange={(e) => setEmpSkills(e.target.value)}
        />
      </div>
      <div className="btn-group text-center">
        <button
          className="w-1/2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white font-semibold py-3 rounded-md shadow"
          onClick={handleAddEmp}
        >
          Add New Emp
        </button>
      </div>
    </div>
  );
};