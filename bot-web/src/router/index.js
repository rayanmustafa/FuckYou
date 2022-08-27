import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Commands from "@/views/Commands.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/commands",
    name: "cmd",
    component: Commands,
  },
  {
    path: "/invite",
    beforeEnter: () => {
      window.location.href =
        "https://discord.com/api/oauth2/authorize?client_id=916776483366772756&permissions=8&scope=bot%20applications.commands";
    },
  },
  {
    path: "/support",
    beforeEnter: () => {
      window.location.href = "https://discord.gg/CXEMtZ5D5E";
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
