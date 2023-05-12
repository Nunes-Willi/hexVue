import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AutorView from "../views/AutorView.vue";
import LivrosView from "../views/LivrosView.vue";
import EditorasView from "../views/EditorasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutorView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/livros",
      name: "livors",
      component: LivrosView,
    },
  ],
});

export default router;
