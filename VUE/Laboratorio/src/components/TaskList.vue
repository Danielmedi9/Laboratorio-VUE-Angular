<script setup lang="ts">
import { useTaskStore } from "@/stores/task";
import { onMounted } from "vue";

const tasksStore = useTaskStore();

onMounted(() => {
  tasksStore.loadTask();
});

const onChange = (timestamp: number) => {
  tasksStore.toggleCompleted(timestamp);
};

const onClick = (timestamp: number) => {
  tasksStore.removeTask(timestamp);
};
</script>

<template>
  <ul>
    <li v-for="task in tasksStore.tasks" :key="task.timestamp">
      <form @submit.prevent>
        <input
          type="checkbox"
          :id="`task-${task.timestamp}`"
          :checked="task.completed"
          @change="onChange(task.timestamp)"
        />
        <label :for="`task-${task.timestamp}`">
          {{ task.text }}
        </label>
        <button type="button" @click="onClick(task.timestamp)">Remove</button>
      </form>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 2rem;
  width: 20rem;
}
li {
  color: white;
}
form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
label {
  margin-right: auto;
}
</style>
