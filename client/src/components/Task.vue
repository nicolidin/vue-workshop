<template>
  <div class="Task"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Task from "@/models/task";

@Component({
  components: {},
  computed: {},
  methods: {}
})
export default class Home extends Vue {
  @Prop() task!: Task;
}
</script>
