<template>
  <div class="todo-list"></div>
</template>

<script lang="ts">
import Task from "./Task.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
import TaskModel from "@/models/task";

@Component({
  components: { Task },
  computed: {},
  methods: {}
})
export default class TodoList extends Vue {}
</script>
