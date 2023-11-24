import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogAvView from "../views/LogAvView.vue";
import EventosView from "../views/EventosView.vue";
import EditorasView from "../views/EditorasView.vue";
import LogPcView from "../views/LogPcView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/evento",
      name: "eventos",
      component: EventosView,
    },
    {
      path: "/avaliadores",
      name: "avaliadores",
      component: LogAvView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/participantes",
      name: "participantes",
      component: LogPcView,
    },
  ],
});

export default router;
