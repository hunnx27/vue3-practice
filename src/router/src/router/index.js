import { createRouter, createWebHistory } from "vue-router"
import GroundItem from "/src/components/GroundItem.vue"
import GroundLoginItem from "/src/components/GroundLoginItem.vue"
import GroundStoreSampleItem from "/src/components/GroundStoreSampleItem.vue"

const routes = [
    {
        path: "/",
        name: "Main 1",
        component: GroundItem,
    },
    {
        path: "/login",
        name: "Login",
        component: GroundLoginItem,
    },
    {
        path: "/storeSample",
        name: "StoreSample",
        component: GroundStoreSampleItem,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;