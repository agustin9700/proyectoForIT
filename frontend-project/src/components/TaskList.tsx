import { useState, useEffect } from "react";
import { TaskType } from "../types";
import { listApi, deleteTask } from "../hooks/useApi";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchTasks = async () => {
    const tasks = await listApi();
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" bg-white p-6 rounded-lg shadow-lg h-full  ">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Lista de tareas
        </h2>
        <div className="flex justify-between items-center my-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded-md"
          >
            + Crear Tarea
          </button>
          <h3 className="text-xl font-semibold text-gray-700 text-center ">
            Total Tareas: {tasks.length || "No hay tareas"}
          </h3>
        </div>
        <TaskForm
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          onTaskCreated={fetchTasks}
        />
        <div className="overflow-x-auto my-6 max-h-[600px] overflow-y-auto ">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">#</p>
                </th>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">Titulo</p>
                </th>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">Descripcion</p>
                </th>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">Fecha</p>
                </th>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">Estado</p>
                </th>
                <th className="border-y border-gray-300 bg-gray-50/50 p-4">
                  <p className=" text-stone-700  text-2xl">Accion</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={handleDelete}
                  onTaskUpdated={fetchTasks}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
