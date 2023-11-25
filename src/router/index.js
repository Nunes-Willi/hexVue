import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogAvView from "../views/LogAvView.vue";
import EventosView from "../views/EventosView.vue";
import NotasView from "../views/NotasView.vue";
import InscricaoPView from "../views/InscricaoPView.vue";
import LogPcView from "../views/LogPcView.vue";
import EventosAvView from "../views/EventosAvView.vue";
import InscricaoAvView from "../views/InscricaoAvView.vue"
import EquipesRegView from "../views/EquipesRegView.vue"

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
    {
      path: "/inscricaop",
      name: "inscricaop",
      component: InscricaoPView,
    },
    {
      path: "/eventosav",
      name: "enventosav",
      component: EventosAvView,
    },
    {
      path: "/inscricaoav",
      name: "inscricaoav",
      component: InscricaoAvView,
    },
    {
      path: "/equepesreg",
      name: "equipesreg",
      component: EquipesRegView,
    },
  ],
});

export default router;
