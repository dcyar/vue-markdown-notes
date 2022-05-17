<template>
  <textarea
    ref="textarea"
    :value="body"
    @input="$emit('update:body', $event.target.value)"
    @blur="$emit('blur-note', $event.target.value)"
  ></textarea>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";

export default {
  name: "ActiveNoteMD",
  props: {
    body: String,
  },
  emits: ["update:body", "blur-note"],
  setup() {
    const textarea = ref(null);

    const focusTextarea = () => textarea.value.focus();

    onMounted(focusTextarea);
    onUpdated(focusTextarea);

    return { textarea };
  },
};
</script>
