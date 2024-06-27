import { createRouter, createWebHistory } from "vue-router";
import ContainersView from "./components/ContainersView.vue";
import ContainersDetail from "./components/ContainersDetail.vue";
import SearchItem from "./components/SearchItem.vue";
import ItemResult from "./components/ItemResult.vue";

const routes = [
  { path: "/", component: ContainersView },
  {
    path: "/containers/:id",
    name: "Detail",
    component: ContainersDetail,
    props: true,
  },
  { path: "/search", name: "Search", component: SearchItem },
  {
    path: "/result/:id",
    name: "Result",
    component: ItemResult,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
