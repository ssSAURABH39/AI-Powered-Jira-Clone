import { TaskBoard } from './components/EmployeeTabs';
import { useEffect, useState } from "react";
import { EmployeeManagement } from "./components/EmployeeManagement";
import { TaskManagement } from "./components/TaskManagement";
import Header from "./components/header";

function App() {
  const [employees, setEmployees] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5500/api/emp/empList")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch employee..");
        return response.json();
      })
      .then((data) => setEmployees(data))
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5500/api/task/getTaskList")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch task list..");
        return response.json();
      })
      .then((data) => setTaskList(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <Header />
      {error && <div className="text-red-600 text-center font-semibold my-4">{error}</div>}
      <div className="w-10/12 m-auto">
        <main className="flex justify-between gap-6">
          <EmployeeManagement />
          <TaskManagement employees={employees} />
        </main>
        <TaskBoard employees={employees} taskList={taskList} />
      </div>
    </div>
  );
}
export default App;