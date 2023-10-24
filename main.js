import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import MainSite from './components/Main/MainSite.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import MarketSide from './components/Market/MarketSide.vue'
import LogIn from './components/LogIn/LogIn.vue'
import ErrorMessage from './components/ErrorMessage/ErrorMessage.vue'

const routes = [
    {
         path: '/', name: 'Main', component: MainSite 
    },
    {
         path: '/aboutus', name: 'AboutUs', component: AboutUs 
    },
    {
        path: '/market', name: 'Market', component: MarketSide
    },
    {
        path: '/registration', name: 'Login', component: LogIn
    },
    {
         path: '/pathMatch(.*)*', name: 'Error404', component: ErrorMessage 
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')