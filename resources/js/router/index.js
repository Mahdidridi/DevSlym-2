import { createRouter, createWebHistory } from 'vue-router';

import Test from '../Pages/Test.vue';
import notfound from '../Pages/NotFound.vue';
import Sidebar from '../components/Sidebar.vue';

const routes =[
    {
        Path: '/',
        component : Sidebar,
        children : [
            {
                path: '/test',
                component : Test
            }

        ]
    },
    {
        path : '/:pathMatch(.*)*',
        component : notfound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;