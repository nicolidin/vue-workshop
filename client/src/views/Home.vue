<template>
  <div class="home">
    <h1>HOME</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import TodoList from "../components/TodoList.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import {} from "vuex";

@Component({
  components: { TodoList },
  computed: {},
  methods: {}
})
export default class Home extends Vue {
  fetchJockes!: Function;
}
</script>
