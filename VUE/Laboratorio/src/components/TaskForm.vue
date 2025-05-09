<script setup lang="ts">
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";

const tasksStore = useTaskStore();

const taskInput = ref("");

const addTask = () => {
  tasksStore.addTask(taskInput.value);
  taskInput.value = "";
};
</script>

<template>
  <form @submit.prevent="addTask">
    <label for="task">Task:</label>
    <input
      id="task"
      type="text"
      v-model="taskInput"
      placeholder="Write your task"
    />
    <button>Add</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  gap: 6px;
  height: 32px;
}

label {
  color: white;
  font-weight: bold;
  font-size: large;
  align-self: center;
}
input {
  border-radius: 8px;
}
button {
  border-radius: 8px;
}
</style>
