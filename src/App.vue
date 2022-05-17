<template>
  <DeleteNote v-if="$store.state.deleting" />
  <div
    v-if="$store.state.user"
    class="container | min-h-1/2 p-3 my-3 mx-auto | bg-white rounded-xl shadow-2xl | md:flex"
  >
    <section class="md:w-1/4 | p-3 mr-3 | bg-gray-100">
      <a
        @click="$store.dispatch('userLogout')"
        class="underline text-center block font-bold mb-3"
        href="#"
      >
        Logout
      </a>
      <SearchNote />
      <NoteList />
    </section>
    <section class="p-3 | flex-grow">
      <ActiveNote />
    </section>
  </div>
  <div v-else>
    <a
      @click="$store.dispatch('userLogin')"
      class="w-full h-screen | flex justify-center items-center | underline"
      href="#"
      >Login please</a
    >
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import ActiveNote from "./components/ActiveNote.vue";
import DeleteNote from "./components/DeleteNote.vue";
import SearchNote from "./components/SearchNote.vue";
export default {
  name: "App",
  components: { NoteList, ActiveNote, DeleteNote, SearchNote },
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
