import { useState } from "react";
import { TaskType } from "../types";
import EditForm from "./EditForm";
import { Pencil, Trash2 } from "lucide-react";

interface TaskItemProps {
  task: TaskType;
  onDelete: (id: number) => void;
  onTaskUpdated: () => void;
}

export default function TaskItem({
  task,
  onDelete,
  onTaskUpdated,
}: TaskItemProps) {
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <tr className="hover:bg-gray-50 transition text-base text-center">
        <td className="px-6 py-4 border-b border-gray-200 font-bold text-lg">
          {task.id}
        </td>
        <td className="px-6 py-4 border-b border-gray-200 font-semibold text-gray-800 text-lg">
          {task.title}
        </td>
        <td className="px-6 py-4 border-b border-gray-200 text-gray-600 text-base">
          {task.description}
        </td>
        <td className="px-6 py-4 border-b border-gray-200 text-gray-500 text-sm">
          {task.createdAt}
        </td>
        <td className="px-6 py-4 border-b border-gray-200">
          <span
            className={`px-3 py-1 rounded-full font-semibold text-sm ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? "Completada" : "Pendiente"}
          </span>
        </td>
        <td className="px-6 py-4 border-b border-gray-200">
          <button
            onClick={() => setEditModal(true)}
            className="mr-6 text-blue-600 hover:text-blue-800 transition text-lg"
            title="Editar"
          >
            <Pencil size={28} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800 transition text-lg"
            title="Eliminar"
          >
            <Trash2 size={28} />
          </button>
        </td>
      </tr>

      <EditForm
        task={task}
        isVisible={editModal}
        onClose={() => setEditModal(false)}
        onTaskUpdated={onTaskUpdated}
      />
    </>
  );
}
