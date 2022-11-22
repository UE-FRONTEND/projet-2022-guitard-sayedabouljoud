import { createWebHistory, createRouter } from "vue-router";
//import App from "@/App";
import Home from "@/composants/Home"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home, /* <--- Change it */
    },
    {
        path: "/stats",
        name: "Stats",
        //component: Stats
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
