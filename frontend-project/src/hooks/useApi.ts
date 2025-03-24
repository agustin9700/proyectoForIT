import type { TaskType } from "../types";

export const listApi = async (): Promise<TaskType[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/tasks/lista");

    if (!response.ok) {
      throw new Error(`Error al obtener la lista de tareas`);
    }

    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("No se pudo obtener la lista de tareas.", error);
    return [];
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/borrar/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`Hubo un problema al eliminar la tarea con ID: ${id}`);
    }

    console.log(`¡La tarea con ID ${id} ha sido eliminada con éxito!`);
  } catch (error) {
    console.error(`No se pudo eliminar la tarea con ID ${id}.`, error);
  }
};

export const createTask = async (task: TaskType): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/api/tasks/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error(`Hubo un problema al crear la tarea: ${task.title}`);
    }

    console.log(`¡La tarea "${task.title}" ha sido creada con éxito!`);
  } catch (error) {
    console.error(`No se pudo crear la tarea: ${task.title}.`, error);
  }
};

export const updateTask = async (task: TaskType): Promise<void> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tasks/editar/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {   
      throw new Error(`Hubo un problema al actualizar la tarea: ${task.title}`);
    }

    console.log(`¡La tarea "${task.title}" ha sido actualizada con éxito!`);  


  } catch (error) {
    console.error(`No se pudo actualizar la tarea: ${task.title}.`, error);
  }
};

