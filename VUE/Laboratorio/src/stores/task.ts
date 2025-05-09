import { ref } from "vue";
import { defineStore } from "pinia";
import type { TaskType } from "@/types";

const taskFactory = (text: string): TaskType => ({
  timestamp: Date.now(),
  text,
  completed: false,
});

const getTasksFromLocalStorage = (): TaskType[] => {
  const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : [];
  return tasks;
};

const setTasksToLocalStorage = (task: TaskType) => {
  const storedValue = getTasksFromLocalStorage();
  storedValue.push(task);
  localStorage.setItem("tasks", JSON.stringify(storedValue));
};

export const useTaskStore = defineStore("tasksStore", () => {
  const tasks = ref<TaskType[]>([]);

  const loadTask = () => {
    tasks.value = getTasksFromLocalStorage();
  };

  const addTask = (task: string) => {
    const newTask = taskFactory(task);
    tasks.value.push(newTask);
    setTasksToLocalStorage(newTask);
  };

  const toggleCompleted = (timestamp: number) => {
    const task = tasks.value.find((task) => task.timestamp === timestamp);
    if (task) {
      task.completed = !task.completed;
    }
  };

  const removeTask = (timestamp: number) => {
    const index = tasks.value.findIndex((task) => task.timestamp === timestamp);
    if (index !== -1) {
      tasks.value.splice(index, 1);
    }
  };

  return {
    tasks,
    addTask,
    removeTask,
    loadTask,
    toggleCompleted,
  };
});
