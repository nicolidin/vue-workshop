<template>
  <div class="todo-list">
    <h1>TODOLIST</h1>
    <ul>
      <li v-for="task in taskList" :key="task.id">
        <Task :task="task" />
      </li>
    </ul>
    <div v-if="isCreatingCard">
      <input type="text" v-model="newCardTitle" />
      <input type="text" v-model="newDescription" />
      <button @click="saveCard()">SaveCard</button>
      <button @click="isCreatingCard = false">CloseCardCreation</button>
    </div>
    <button @click="isCreatingCard = true">Create Task New Task</button>
  </div>
</template>

<script lang="ts">
import Task from "./Task.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import TaskModel from "@/models/task";

@Component({
  components: { Task },
  computed: {
    ...mapState({ taskList: "taskList" })
  },
  methods: {
    ...mapMutations({ pushNewTask: "pushNewTask" })
  }
})
export default class TodoList extends Vue {
  newCardTitle: string = "";
  newDescription: string = "";
  pushNewTask!: Function;
  saveCard() {
    let task = new TaskModel(this.newCardTitle, this.newDescription);
    this.pushNewTask(task);
  }
  taskList!: Array<Task>;
  isCreatingCard: boolean = false;
}
</script>
