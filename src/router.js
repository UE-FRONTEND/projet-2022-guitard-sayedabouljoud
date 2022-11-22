import { createWebHistory, createRouter } from "vue-router";
//import App from "@/App";
import Home from "@/composants/Home"
import Stats from "@/composants/Stats"
import Game from "@/composants/Game"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home, /* <--- Change it */
    },
    {
        path: "/stats",
        name: "Stats",
        component: Stats,
    },
    {
        path: "/game",
        name: "Game",
        component: Game,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
