import { useForm } from "react-hook-form";
import { TaskType } from "../types";
import { createTask } from "../hooks/useApi";

interface TaskFormProps {
  isVisible: boolean;
  onClose: () => void;
  onTaskCreated: () => void;
}

export default function TaskForm({
  isVisible,
  onClose,
  onTaskCreated,
}: TaskFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskType>({
    defaultValues: { completed: false },
  });

  const onSubmit = async (data: TaskType) => {
    await createTask(data);
    onTaskCreated();
    reset();
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0  backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg z-10 relative ">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Crear Tarea
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-xl font-semibold text-center">
              Titulo
            </label>
            <input
              {...register("title", { required: "*Campo obligatorio" })}
              type="text"
              className="w-full border rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-xl font-semibold text-center">
              Descripción
            </label>
            <textarea
              {...register("description", { required: "*Campo obligatorio" })}
              className="w-full border rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
