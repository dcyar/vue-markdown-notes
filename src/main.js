import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "tailwindcss/tailwind.css";

store.dispatch("checkAuth");

createApp(App).use(store).mount("#app");
