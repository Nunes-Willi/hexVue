import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogAvView from "../views/LogAvView.vue";
import EventosView from "../views/EventosView.vue";
import NotasView from "../views/NotasView.vue";
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
      path: "/notas",
      name: "notas",
      component: NotasView,
    },
    {
      path: "/participantes",
      name: "participantes",
      component: LogPcView,
    },
  ],
});

export default router;
