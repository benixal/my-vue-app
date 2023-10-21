import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Foods from './components/Foods.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'
const router = createRouter({
    routes:[
        {path:"/my-vue-app/",component:Home},
        {path:"/my-vue-app/foods",component:Foods},
        {path:"/my-vue-app/profile",component:Profile},
    ],
    history:createWebHistory()
})

createApp(App).use(router).mount('#app')