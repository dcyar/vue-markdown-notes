<template>
  <input
    v-model="searchTerm"
    type="text"
    placeholder="Search note"
    class="w-full p-2 | border-2 rounded-md"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchNote",
  setup() {
    const store = useStore();

    const searchTerm = computed({
      get: () => store.state.searchTerm,
      set: (value) => store.commit("setSearchTerm", value),
    });

    return { searchTerm };
  },
};
</script>
