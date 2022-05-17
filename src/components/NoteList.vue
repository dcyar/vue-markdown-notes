<template>
  <TransitionGroup name="list">
    <NoteListItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
      class="list-complete-item p-3 my-4 | border-2 border-white bg-gray-300 shadow-xl rounded-md | cursor-pointer"
    />
  </TransitionGroup>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NoteListItem from "./NoteListItem.vue";
export default {
  name: "NoteList",
  components: { NoteListItem },
  setup() {
    const store = useStore();

    return {
      notes: computed(() => store.getters.getNotesBySearchTerm),
    };
  },
};
</script>

<style>
.list-complete-item {
  transition: all 0.8s ease;
}
.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: relative;
}
</style>
